import React from 'react';
import './book.css';


export default function Book(props) {
    return(
        <div className="bookInfo">
            <h1 className="bookTitle">
                {props.title}
            </h1>
            <div className="bookRow">
                <img src={props.img} alt="book cover" className="bookPicture" />
                <div className="bookDescriptionContainer">
                    <div className="bookAuthor">
                        Author: {props.author}<br />
                        Price: ${props.price}
                    </div>
                    <div className="bookDescription">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
