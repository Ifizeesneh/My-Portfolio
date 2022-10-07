import React from 'react'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo' rel="noopener noreferrer">IFEOLUWA</a>
      <ul className='permalinks'>
        <li> <a href="#home">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer