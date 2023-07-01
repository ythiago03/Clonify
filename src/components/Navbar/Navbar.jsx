import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from '../../../public/Logo.svg';


import './Navbar.css';

const Navbar = () => {

  const [menuOpened, setMenuOpened] = useState(true);

  const getMenuStyle = (menuOpened) => {
    if(document.documentElement.clientWidth <= 500){
      return {display: menuOpened && 'flex'};
    }
  };

  const btnToggle = (menuOpened, child) => {
    switch(child){
    case 0:
      return {
        transform: menuOpened && 'rotate(45deg)',
        top: menuOpened &&'20px'
      };   
    case 1:
      return {
        transform: menuOpened && 'rotate(-45deg)'
      };  
    default:
      break;  
    }
  };

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="Logo escrito Clonify" />
        </Link>
      </div>

      <ul className="nav-list" style={getMenuStyle(menuOpened)}>
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
      <button  
        onClick={() => setMenuOpened(prev => !prev)} 
        className="hamburguer">
        <span style={btnToggle(menuOpened, 0)}></span>
        <span style={btnToggle(menuOpened, 1)}></span>
      </button>
    </nav>  
  );
};

export default Navbar;
