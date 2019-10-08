import React, { Component } from 'react';
import './bookList.css';

import Book from '../book/book';

class BookList extends Component {
    render() {
        const books = this
            .props
            .books
            .map((book, i) => {
                return (
                    <Book { ...book } key={i}/>
                )
            });
        return (
            <div className="bookList">
                {books}
            </div>
        );
    }
}

BookList.defaultProps = {
    books: []
};

export default BookList;