import React, { Component } from 'react';
import './App.css';

import SearchBar from './searchBar/searchBar';
import BookList from './bookList/bookList';

const Books = [
  {
    title:"quilts",
    author:"that one guy",
    price: 4.89,
    description: "somthing something ya ya yah",
    img: "https://ibb.co/F4yCzr4"
  },
  {
    title:"cats",
    author:"the other gal",
    price: 6.25,
    description: "uh huh watcha know bout dat",
    img: "https://ibb.co/F4yCzr4"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList books={Books}/>
      </div>
    );
  }
}

export default App;