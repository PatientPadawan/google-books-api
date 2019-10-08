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

  constructor(props) {
    super(props);
    this.state = {
      Books: [],
    };
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=quilts&key=AIzaSyAsrWdPCSFM1PlY03W0_vLWOSulgUg7u7Q'
    const options = {
      method: 'GET',
      headers: {
        "Content-Type" : "application/json"
      }
    };

    fetch(url, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }

      return res.json();
    })
    .then(data => {
      this.setState({
        Books: data.items,
        error: null
      });
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="banner">
          Google Book Search
        </h1>
        <SearchBar />
        <BookList books={this.state.Books}/>
      </div>
    );
  }
}

export default App;