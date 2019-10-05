import React, { Component } from 'react';
import './searchBar.css';

import Filter from '../filter/filter';
import SearchBox from '../searchBox/searchBox';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <SearchBox />
                <Filter />
            </div>
        )
    }
}

export default SearchBar;