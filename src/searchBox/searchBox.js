import React from 'react';
import './searchBox.css';

export default function SearchBox(props) {
    return (
        <div className="searchBarContainer">
            <form>
                <label htmlFor="Search">Search: </label>
                <input
                    type="text"
                    name="userSearch"
                    id="userSearch"
                    placeholder="Green Eggs and Ham"
                />
                <button type="submit" id="userSubmit">Search</button>
            </form>
        </div>
    )
} 