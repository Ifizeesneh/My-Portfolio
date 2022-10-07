import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="http://linkedin.com" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="http://github.com" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="http://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials