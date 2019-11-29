import React from 'react';
import './footer.scss'

export default props => {

    const year = new Date().getFullYear();

    return (
        <div className='footer'>
            <div>Sweetcorner.com</div>
            <div>&copy;{year} all rights reserved.</div>
            <div>800 264 2099</div>

        </div>
    );
}