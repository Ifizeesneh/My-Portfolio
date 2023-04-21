import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import { TiMessages } from 'react-icons/ti'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  const navRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav('#' + entry.target.id)
        }
      })
    }, options)
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })
    return () => {
      observer.disconnect()
    }
  }, [])

  const handleClick = (event, id) => {
    event.preventDefault()
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav ref={navRef}>
      <a
        href="#home"
        onClick={(event) => handleClick(event, '#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={(event) => handleClick(event, '#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={(event) => handleClick(event, '#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={(event) => handleClick(event, '#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <MdOutlineHomeRepairService />
      </a>
      <a
        href="#contact"
        onClick={(event) => handleClick(event, '#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <TiMessages />
      </a>
    </nav>
  )
}

export default Nav
