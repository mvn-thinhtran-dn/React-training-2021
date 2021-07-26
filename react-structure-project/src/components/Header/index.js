import React from 'react';
import { a } from 'react-router-dom';
import logo from './../../assets/images/logo.svg'
import {FaShoppingCart, FaUserCircle} from 'react-icons/fa'

const Header = () => {
  return (
    <header className="page-header">
      <div className="container">
        <a href="/" className="logo"><img src={logo} alt="logo"/></a>
        <nav className="page-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
            <a href="/product">Products</a>
            </li>
            <li>
            <a href="/about">About Us</a>
            </li>
          </ul>
        </nav>
        <ul className="header-account">
          <li>
            <a href="/auth/login"><FaUserCircle/></a>
          </li>
          <li>
            <a href="/"><FaShoppingCart/></a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;