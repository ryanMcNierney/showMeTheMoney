import React from 'react'
import './Header.css'
import logo from './moneyLogo.png'

const Header = () => {
  return (
    <div id="header">
      <div id="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="header-title">
        <h2>Show Me The Money</h2>
      </div>
    </div>
  )
}

export default Header
