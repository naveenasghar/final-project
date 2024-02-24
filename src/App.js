import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Header from './components/common/Header';
import Headings from './components/common/Headings/heading';
import Main from './components/common/Main/main';
import Head from './components/Head/head';
import Potlis from './pages/potlis';
import Shopping from './components/Shopping/shopping';
import Models from './components/common/Models/models';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Services from './pages/services';



import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
<Header/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/potlis' element={<Potlis />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>   
     
      <Headings />
      <Main />
      <Head /> 
      <Shopping />
       <Models />
      <Home/>
     
      </>

  );
}

export default App;

     

     
      

