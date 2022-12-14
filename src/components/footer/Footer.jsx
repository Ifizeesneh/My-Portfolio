import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { SiTwitter } from "react-icons/si"
import { FaInstagramSquare } from "react-icons/fa"
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo" rel="noopener noreferrer">
        IFEOLUWA
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#home">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/ifeoluwa-dele-oyero-63411a223/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/ifizeesneh" target="_blank" rel="noopener noreferrer">
          <SiTwitter />
        </a>
        <a
          href="https://www.instagram.com/ifizeesneh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; Dele-Oyero Ifeoluwa. All rights Reserved. 
        </small>
      </div>
    </footer>
  )
}

export default Footer
