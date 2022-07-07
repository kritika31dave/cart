import React from 'react'
import {NavLink} from "react-router-dom"
import "./Nav.css"
import Logo from "./Logo.png"
import { FaRegHeart,FaShoppingCart } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className='nav'>
      <nav className='home'>
        <ul>
            <li ><NavLink to="/" className='link'>Home</NavLink></li>
            <li><NavLink to="/deal" className='link'>Top Deals</NavLink></li>
            <li><NavLink to="/men" className='link'>Women</NavLink></li>
            <li><NavLink to="/com" className='link'>Comforts</NavLink></li>
        </ul>
      </nav>
      <img src={Logo}></img> 
      <nav>
        <ul>
            <li><NavLink to="/sign"  className='link  sign'>SignIn</NavLink></li>
            <li><NavLink to="/wish"  className='link'><FaRegHeart className='icon'/><button className='buttOne'>0</button></NavLink></li>
            <li><NavLink to="/cart"  className='link'><FaShoppingCart className='iconSec'/><button className='butt'>0</button></NavLink></li>
        </ul>
      </nav> 
    </div>
  )
}

export default Nav