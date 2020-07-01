import React from 'react';
import './card-list.style.css';
import { Card } from '../../components/card/card.component';

export const CardList = props => {
    return (
        <div className="card-list">
             { props.postars.map((s) => <Card key={s.id} star={s} /> ) }
        </div>
    )
}