import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import ItemsPage from './ItemsPage'
// import DetailPage from '../components/DetailPage'
import './App.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/items" component={ItemsPage}/>
        </div>
      </Router>
    );
  }
}

export default App;


// React Components As Routes Lab
