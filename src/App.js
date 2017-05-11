import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Navigation">
            <ul>
              <li><Link to="/about">about</Link></li>
              <li><Link to="/works">works</Link></li>
              <li><Link to="/contact">contact</Link></li>
            </ul>
          </div>
        </div>
        <p className="App-intro">
          {this.props.children}

        </p>
      </div>
    );
  }
}

export default App;
