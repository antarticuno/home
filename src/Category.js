import React, {Component} from 'react';
import { fetchJSON } from "./utils/communication";
import Art from './Art';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categories: [],
    };
  }

  async componentDidMount() {
    await fetchJSON("/categories")
    //.then(response => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            categories: result
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
    const {error, isLoaded, categories} = this.state;
    if (error) {
      return <div>{error.toString()}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <div>
          <ol>
            {
              categories.map(category => (
                <li key={category.id} align="start">
                  <div>
                    <p><Link className="btn btn-primary">{category.name}</Link></p>
                    <p>{category.desc}</p>
                    <Art category={category.id} />
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

export default Category;