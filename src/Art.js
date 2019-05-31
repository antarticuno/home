import React, {Component} from 'react';
import { fetchJSON } from "./utils/communication";

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
    await fetchJSON("/categories/"+this.state.category)
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
          <ol>
            {
              arts.map(art => (
                <li key={art.id} align="start">
                  <div>
                    <p>{art.title}</p>
                    <p><img src={art.img_url} alt={art.title} /></p>
                    <p>{art.desc}</p>
                  </div>
                </li>
              ))
            }
          </ol>
        </div>
      );
    }
  }
}

export default Art;