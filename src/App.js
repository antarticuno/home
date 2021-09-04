import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="container-fluid" id="root">
      <Router>
          <div className="nav-links" id="nav-links">
            <NavLink to="/" className="btn btn-outline-secondary">Home</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/about">Me</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/gallery">Gallery</NavLink>&nbsp;&nbsp;&nbsp;
            {/*<NavLink to="/projects">Projects</NavLink>&nbsp;&nbsp;&nbsp;*/}
            <a href="https://github.com/antarticuno">Projects</a>
          </div>

          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/about"
            exact
            component={About}
          />
          <Route
            path="/gallery"
            exact
            component={Gallery}
          />
          {/*<Route
            path="/projects"
            exact
            component={Portfolio}
          />*/}
      </Router>
      {/*<h1>Where is the Home Page?</h1>*/}
    </div>);
}

export default App;
