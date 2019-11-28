import React from 'react';
import './header.scss';
import Header_img from './header_img';
import Nav from '../nav'
import Logo from './logo';


export default props => {
    return (
        <div >
        <Header_img />
        <Nav />
        <Logo />

            <h1 className='mission_statement'>We deliver cupcakes for the important events in your life!</h1>
            <hr></hr>
        </div>
    );
}