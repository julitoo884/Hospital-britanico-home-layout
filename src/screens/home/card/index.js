import React from 'react';
import './card.css';

function Card ( props ) {
    return( 
        <div className='card--container'>
            <img className='card--img' src={props.image} alt={props.alt} />
            <p className='card--title'>{props.title}</p>
        </div>
    )
}

export default Card;