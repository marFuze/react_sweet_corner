import React from 'react';
import './header.scss';
import Header_img from './header_img';
import Nav from '../nav'
import Logo from './logo';


export default props => {
    return (
        <div className='allura'>
        <Header_img />
        <Nav />
        <Logo />

            <h1 className='center'>This is the Header</h1>
        </div>
    );
}