import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Home from '../components/Home';
import ItemsPage from './ItemsPage';


import './App.css'

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/items" component={ItemsPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
