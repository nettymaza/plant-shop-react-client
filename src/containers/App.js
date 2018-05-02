import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Items from './Items'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Items />
      </div>
    );
  }
}

export default App;
