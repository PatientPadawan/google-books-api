import React, { Component } from 'react';
import './searchBar.css';

import Filter from '../filter/filter';
import SearchBox from '../searchBox/searchBox';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <SearchBox 
                    setUserQuery={this.props.setUserQuery}
                    handleSubmit={this.props.handleSubmit}
                />
                <Filter
                    setBookType={this.props.setBookType}
                    setPrintType={this.props.setPrintType}
                />
            </div>
        )
    }
}

export default SearchBar;