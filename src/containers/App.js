import React, { Component } from 'react';

import Items from './Items'
import './App.css'

const API_URL = process.env.REACT_APP_API_URL;

// const items = [
//   {
//     name: "Peonies",
//     price: 7.99,
//     img_url: "http://www.frosthillfarm.com/publishImages/Index~~element9.JPG",
//     likes: 0
//   },
//   {
//     name: "Roses",
//     price: 10.99,
//     img_url: "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/roses-2888589_1920.jpg?itok=kUCYffoV",
//     likes: 0
//   },
//   {
//     name: "ForgetMeNot",
//     price: 4.99,
//     img_url: "http://dreamstop.com/wp-content/uploads/2016/09/Forget-me-not-flower-dreams.jpg",
//     likes: 0
//   },
// ]

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/items`)
    .then(response => response.json())
    .then(items => this.setState({ items }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
