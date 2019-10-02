import React, {Component} from 'react';
import {fetchJSON} from "./utils/communication";
import Art, {updateCategory} from './Art';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import _ from 'lodash';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categories: [],
      category: -1,
      categoryDesc: "Below is a collection of pieces from my career. I experiment with a" +
        " variety of styles and mediums, but tend to stick to acrylic, watercolor," +
        " ink, and digital paintings. Feel free to contact me at" +
        " antarticuno@gmail.com if you have any questions about potential" +
        " commissions, design work, etc." ,
    };
  }

  async componentDidMount() {
    //document.body.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {
    let parent = document.getElementById('parent');
    if (parent !== null) {
      let navBar = document.getElementById('categories-nav');
      let globalNavBar = document.getElementById('nav-links');
      let topNavSize = globalNavBar.scrollHeight + globalNavBar.offsetTop - 1;
      let scrollTo = parent.offsetTop - topNavSize;
      if (window.pageYOffset > scrollTo) {
        navBar.classList.add("fixed");
        navBar.setAttribute("style", "top:" + topNavSize + "px");
      } else {
        navBar.classList.remove("fixed");
        navBar.removeAttribute("style");
      }
    }
  }


  updateArt(category, categoryDesc) {
    updateCategory(category, categoryDesc);
  }

  render() {
    const {error, isLoaded, categories} = this.state;
    let categoryNames = categories.map((category) => {
      if (this.state.category == category.id) {
        return <li key={"category_" + category.id} className="selected">
          {category.name}
        </li>;
      } else {
        return <li key={"category_" + category.id} onClick={() => {
          this.setState(_.assign({}, this.state, {
            category: category.id,
            categoryDesc: category.desc
          }));
          this.updateArt(category.id, category.desc);
          document.getElementById("category_" + category.id)
        }}>
          {category.name}
        </li>
      }
    });

    if (error) {
      return <div>{error.toString()}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return <div id="parent">
        <div id="categories-content">
          <Art key={this.state.category} id="art-box" category={this.state.category}
               categoryDesc={this.state.categoryDesc}/>
        </div>
        <div id="categories-nav" className="categories-nav">
          <ul>
            {categoryNames}
          </ul>
        </div>
      </div>;
    }
  }
}

export default Category;