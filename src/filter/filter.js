import React from 'react';
import './filter.css';

export default function Filter(props) {
    return (
        <div className="filterContainer">
            <div className="selectContainer">
                Print Type: 
                <select>
                    <option value="All">All</option>
                    <option value="Books">Books</option>
                    <option value="Magazines">Magazines</option>
                </select>
            </div>
            <div className="selectContainer">
                Book Type: 
                <select>
                    <option value="ebooks">eBooks</option>
                    <option value="free-ebooks">Free e-Books</option>
                    <option value="full">Full</option>
                    <option value="paid-ebooks">Paid e-Books</option>
                    <option value="partial">Partial</option>
                </select>
            </div>
        </div>
    )
}