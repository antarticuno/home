import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="container-fluid" id="root">
      <Router>
          <div className="nav-links" id="nav-links">
            <Link to="/" className="btn btn-outline-secondary">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/about">Me</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/gallery">Gallery</Link>&nbsp;&nbsp;&nbsp;
            {/*<Link to="/projects">Projects</Link>&nbsp;&nbsp;&nbsp;*/}
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
