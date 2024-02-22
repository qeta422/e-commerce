import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='menu'>
            <li><a href="#">A</a></li>
            <li><a href="#">B</a></li>
            <li><a href="#">C</a></li>
        </div>
        <div className='links'>
            <Link to="/"> shop </Link>
            <Link to="/cart">
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
  )
}
