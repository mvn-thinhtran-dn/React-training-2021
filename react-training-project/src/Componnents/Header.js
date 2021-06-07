import React from 'react'

import logo from '../images/instagram.jpeg'

import './Header.css'
class Header extends React.Component{
  
  render() {
    return (
      <>
        <div className="nav-header">
          <img className="logo-item" src={logo} alt="logo"/>
          <ul>
            <li className="menu-1"><a href="#">Menu 1</a></li>
            <li className="menu-2"><a href="#">Menu 2</a></li>
            <li className="menu-3"><a href="#">Menu 3</a></li>
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