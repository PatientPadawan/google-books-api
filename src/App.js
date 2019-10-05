import React, { Component } from 'react';
import './App.css';

import SearchBar from './searchBar/searchBar';
import BookList from './bookList/bookList';

const Books = [
  {
    title:"Quilts",
    author:"that one guy",
    price: 4.89,
    description: "somthing something ya ya yah",
    img: "https://i.ibb.co/9HSHRR2/alphabet-conceptual-game-944740.jpg"
  },
  {
    title:"Cats",
    author:"the other gal",
    price: 6.25,
    description: "uh huh watcha know bout dat",
    img: "https://i.ibb.co/9HSHRR2/alphabet-conceptual-game-944740.jpg"
  }
];

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1 className="banner">
          Google Book Search
        </h1>
        <SearchBar />
        <BookList books={Books}/>
      </div>
    );
  }
}

export default App;