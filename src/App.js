import React, { Component } from 'react';
import './App.css';

import SearchBar from './searchBar/searchBar';
import BookList from './bookList/bookList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Books: [],
      query: 'word',
      bookType: '',
      printType: ''
    };
  }

  setUserQuery(query) {
    this.setState({
      query: query
    });
  }

  setBookType(bookType) {
    this.setState({
      bookType: bookType
    });
  }

  setPrintType(printType) {
    this.setState({
      printType: printType
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&key=AIzaSyAsrWdPCSFM1PlY03W0_vLWOSulgUg7u7Q&`
    
    if (this.state.bookType.length > 0) {
      url = url.concat(`&filter=${this.state.bookType}`)
    };

    if (this.state.printType.length > 0) {
      url = url.concat(`&printType=${this.state.printType}`)
    }

    const options = {
      method: 'GET',
      headers: {
        "Content-Type" : 'application/json'
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
  

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=music&key=AIzaSyAsrWdPCSFM1PlY03W0_vLWOSulgUg7u7Q'
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
        <SearchBar
          setBookType={bookType => this.setBookType(bookType)}
          setPrintType={printType => this.setPrintType(printType)}
          setUserQuery={userQuery => this.setUserQuery(userQuery)}
          handleSubmit={e => this.handleSubmit(e)}
        />
        <BookList books={this.state.Books}/>
      </div>
    );
  }
}

export default App;