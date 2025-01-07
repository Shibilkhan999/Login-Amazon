import React from 'react'
import "../component/Header.css"

const Header = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
          alt="Amazon Logo"
          className="navbar-logo"
        />
        <div className="navbar-location">
          <span>Deliver to</span>
          <strong>Pakistan</strong>
        </div>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Amazon"
        />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Header;

