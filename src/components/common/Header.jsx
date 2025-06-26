import React from 'react'
import '../../styles/Header.css'

function Header({ title, subtitle }) {
  // The Header component takes a title and optional subtitle
  // as props for flexibility and reusability
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1> 🌞 {title} ☁️</h1>
          {/* Only render the subtitle if it exists */}
          {subtitle && <p>{subtitle}</p>}
        </div>
        <nav className="header-nav">
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link">Forecast</a>
          <a href="#" className="nav-link">Settings</a>
        </nav>
      </div>
    </header>
  )
}

export default Header