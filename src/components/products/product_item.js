import React from 'react';
import Money from '../general/money'

export default (props) => {
    console.log('props',props);
    return (
        
        <div className="product-item">
            <h1>{props.name}</h1>
            <img src={props.thumbnail.url} alt={props.thumbnail.altText}/>
    <p>{props.caption}</p>
    <Money pennies={props.cost}/>
        </div>
       
    )
}