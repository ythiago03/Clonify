import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from '../../../public/Logo.svg';


import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="Logo escrito Clonify" />
        </Link>
      </div>

      <ul className="nav-list">
        <li>
          <Link to="/">
            Home
          </Link>
        </li> 
        <li>
          <Link to="/shop">
            Shop
          </Link>
        </li> 
        <li>
          <Link to="/favorite">
            <AiOutlineHeart size={20} />
          </Link>
        </li> 
        <li>
          <Link to="/cart">
            <BiShoppingBag size={20} />
          </Link>
        </li>  
      </ul>      
    </nav>  
  );
};

export default Navbar;
