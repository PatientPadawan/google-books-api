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
                    placeholder="word"
                    onChange={e => props.setUserQuery(e.target.value)}
                />
                <button onClick={e => props.handleSubmit(e)} type="submit" id="userSubmit">Search</button>
            </form>
        </div>
    )
} 