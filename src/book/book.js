import React from 'react';
import './book.css';


export default function Book(props) {
    return(
        <div className="bookInfo">
            <h1 className="bookTitle">
                {props.volumeInfo.title}
            </h1>
            <div className="bookRow">
                <img src={props.volumeInfo.imageLinks.smallThumbnail} alt="book cover" className="bookPicture" />
                <div className="bookDescriptionContainer">
                    <div className="bookAuthor">
                        Author: {props.volumeInfo.authors}<br />
                        Price: {props.saleInfo.saleability === "FOR_SALE" ? props.saleInfo.listPrice.amount : 'not for sale'}
                    </div>
                    <div className="bookDescription">
                        {props.volumeInfo.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
