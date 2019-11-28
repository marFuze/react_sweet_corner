import React from 'react';
import './header.scss';


export default props => {
    return (
        <div>
        <img src={header_img} />

            <h1 className='center'>This is the Header</h1>
        </div>
    );
}