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
              <div key={art.id} align="start">
                <div>
                  <h5>{art.title}</h5>
                  <div className="row">
                    <div className="col"><img src={art.img_url} alt={art.title}/></div>
                    <div className="col middle"><p>{art.desc}</p></div>
                  </div>
                </div>
                <br />
              </div>
            ))
          }
        </div>
      );
    }
  }
}

export default Art;