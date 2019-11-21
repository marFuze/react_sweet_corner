import React from 'react';
import '../assets/css/app.scss';
import { Route } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Services from './services';

const App = () => (
   <div className='app'>
       <div className='container'>
           <Header/>
           <Footer/>
       </div>
   </div>
);

export default App;
