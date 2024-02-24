import React from 'react';
import { AlertCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import { Nav } from './style';


const Navbar = () => {
  return (
    <Nav>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <AlertCircle />
          LEAD WALK
          </Link>
        </div>
        <ul>
        <li>
            <Link to='/Home'>home</Link>
            
          </li>
        <li>
            <Link to='/Potlis'>potlis</Link>
            
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
         
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
