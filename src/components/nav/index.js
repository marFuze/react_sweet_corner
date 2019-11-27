import React from 'react';
import './nav.scss';

export default props => {
    return (
        <ul className='main-nav'>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    )
}