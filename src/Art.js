import React, {Component} from 'react';
import {fetchJSON} from "./utils/communication";
import _ from 'lodash';


export function updateCategory(category, categoryDesc) {
  this.setState(_.assign({}, this.state, {category: category, categoryDesc: categoryDesc}));
}

class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      categoryDesc: props.categoryDesc,
      error: null,
      isLoaded: false,
      arts: [],
    };
    updateCategory = updateCategory.bind(this);
  }


  async componentDidMount() {
    if (this.state.category == -1) {
      this.setState(_.assign({}, this.state, {isLoaded: true}));
      return;
    }
    console.log(this.state.category);
    this.fetchData(this.state.category)
      .then(
        // handle the result
        (result) => {
          console.log('fetching new data');
          this.setState(_.assign({}, this.state, {
            isLoaded: true,
            arts: result
          }));
          console.log('arts fetched');
        },
        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        },
      );
  }

  async fetchData(category) {
    return fetchJSON("/categories/" + category);
  }

  render() {
    const {error, isLoaded, arts} = this.state;
    console.log(this.state);
    if (error) {
      return <div>{error.toString()}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      if (this.state.category < 0) return <p>{this.state.categoryDesc}</p>;
      console.log(arts);
      return (
        <div className="content" key={"category_"+this.state.category}>
          <p>
            {this.state.categoryDesc}
          </p>
          <div className="card-deck">
          {
            arts.map(art => (
              <div key={art.id} align="start" className="card">
                <div>
                  <img src={art.img_url} alt={art.title} className="preview"
                       id={"preview" + art.id}
                       onClick={function () {
                         let modal = document.getElementById("myModal" + art.id);
                         let preview = document.getElementById("preview" + art.id);
                         let modalImg = document.getElementById("img" + art.id);
                         let caption = document.getElementById("caption" + art.id);
                         modal.style.display = "block";
                         modalImg.src = art.img_url;
                         caption.innerHTML = art.title;

                         // Get the <span> element that closes the modal
                         var span = document.getElementById("close" + art.id);

                         // When the user clicks on <span> (x), close the modal
                         span.onclick = function () {
                           modal.style.display = "none";
                         }
                       }
                       }/>
                  <h5>{art.title}</h5>
                  <p>{art.desc}</p>
                </div>
                <div id={"myModal" + art.id} className="modal">
                  <img className="modal-content" id={"img" + art.id} alt={art.title}/>
                  <div className="caption" id={"caption" + art.id}>{art.desc}</div>
                  <span id={"close" + art.id} className="close">&times;</span>
                </div>
                <br/>
              </div>
            ))
          }
          </div>
        </div>
      );
    }
  }
}

export default Art;