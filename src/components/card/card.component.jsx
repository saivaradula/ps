import React from 'react';
import './card.style.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.star.username}?set=set4&size=180x180`} />
             <h2>{props.star.name}</h2>
             <p>{props.star.email}</p>
        </div>
    )
} 