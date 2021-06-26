import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/instagram.jpeg'

import './Header.css'
class Header extends React.Component{
  
  render() {
    return (
      <>
        <div className="nav-header">
          <img className="logo-item" src={logo} alt="logo"/>
          <ul className="menu-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="category-header">
          <ul className="share-list">
            <li><img className="logo-item" src={logo} alt="logo"/></li>
            <li><img className="logo-item" src={logo} alt="logo"/></li>
            <li><img className="logo-item" src={logo} alt="logo"/></li>
          </ul>
        </div>
      </>
    )
  }
}

export default Header
