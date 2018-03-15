import React, { Component } from 'react';
import './App.css';

import AboutMe from './Components/AboutMe';
import Nav from './Components/Nav';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="container">
            <div className="title">
               <h1>ajkprojects</h1>
            </div>
            <Nav />
            <hr />
            <AboutMe />
            <Projects />
         </div>

      </div>
    );
  }
}

export default App;
