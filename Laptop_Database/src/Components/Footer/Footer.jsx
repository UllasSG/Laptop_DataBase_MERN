import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (

    <footer className='footer'>
      <p>&copy; 2023 LaptopDatabase. All rights reserved.</p>
      <div className='links'>
        <Link to="/about">About Us </Link>

        <Link to="/contact"> Contact Us</Link>
      </div>
    </footer>
  )
}

export default Footer