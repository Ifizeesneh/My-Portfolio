import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {TiMessages} from 'react-icons/ti'
import "./nav.css"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     <a href='#' onClick={() => setActiveNav('#')} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
     <a href='#about' onClick={() => setActiveNav('#about')}  className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
     <a href='#experience' onClick={() => setActiveNav('#experience')}  className={activeNav === "#experience" ? "active" : ""}><BiBook /></a>
     <a href='#services' onClick={() => setActiveNav('#services')}  className={activeNav === "#services" ? "active" : ""}><MdOutlineHomeRepairService /></a>
     <a href='#contact' onClick={() => setActiveNav('#contact')}  className={activeNav === "#contact" ? "active" : ""}><TiMessages /></a>
    </nav>
  )
}

export default Nav