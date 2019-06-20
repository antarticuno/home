import React, {Component} from 'react';
import {fetchJSON} from "./utils/communication";

class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      error: null,
      isLoaded: false,
      arts: [],
    };
  }

  async componentDidMount() {
    await fetchJSON("/categories/" + this.state.category)
    //.then(response => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            arts: result
          });
        },
        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        },
      )
  }

  render() {
    const {error, isLoaded, arts} = this.state;
    if (error) {
      return <div>{error.toString()}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <div>
          {
            arts.map(art => (
              <div key={art.id} align="start" className="card">
                <div>
                  <img src={art.img_url} alt={art.title} className="preview" id={"preview" + art.id}
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
                  <img className="modal-content" id={"img" + art.id}/>
                  <div id={"caption" + art.id}></div>
                  <span id={"close" + art.id} className="close">&times;</span>
                </div>
                <br/>
              </div>
            ))
          }
        </div>
      );
    }
  }
}

export default Art;