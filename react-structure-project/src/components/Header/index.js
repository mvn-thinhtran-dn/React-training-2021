import React from 'react';
import logo from './../../assets/images/logo.svg'
import {FaShoppingCart, FaUserCircle, FaHeart} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {
  const favs = useSelector(state => state.fav.value);

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
            <span className="wrap-fav-couter" href="#">
              <FaHeart />
              {!!favs.length && <span>{favs.length}</span>}
            </span>
          </li>
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