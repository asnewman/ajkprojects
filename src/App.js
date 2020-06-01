import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import AboutMe from "./Components/AboutMe";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route path="/blog">
                <div className="title">
                  <h1>Blog</h1>
                </div>
                <Nav />
                <hr />
                <Blog />
              </Route>
              <Route path="/">
                <div className="title">
                  <h1>ajkprojects</h1>
                </div>
                <Nav />
                <hr />
                <AboutMe />
                <Projects />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
