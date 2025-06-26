import React from 'react'
import '../../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; {currentYear} Weather Dashboard</p>
          <p className="footer-tagline">Built with React & Vite</p>
        </div>
        
        <div className="footer-links">
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">API</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer