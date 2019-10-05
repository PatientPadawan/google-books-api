import React from 'react';
import './book.css';


export default function Book(props) {
    return(
        <div className="bookInfo">
            <img url={props.img} target='blank' alt="glasses on a sunrise"/>
            {props.title}
            {props.description}
            {props.author}
            {props.price}
        </div>
    )
}
