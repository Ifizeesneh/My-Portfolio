import React from 'react'
import CTA from './CTA'
import myPic from "../../assets/pic.png"
import HeaderSocials from './HeaderSocials'
import "./header.css"
import {FaLaptopCode} from 'react-icons/fa'
import MovingComponent from "react-moving-text"


const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <MovingComponent
  type="bounce"
  duration="1000ms"
  delay="0s"
  direction="reverse"
  timing="ease"
  iteration="10"
  fillMode="none">
 <FaLaptopCode fontSize={"3rem"}/>
</MovingComponent>
       
        <h1>
<MovingComponent
  type="squeezeVertical"
  duration="1000ms"
  delay="0s"
  direction="reverse"
  timing="ease"
  iteration="20"
  fillMode="none">
 Ifeoluwa Dele-Oyero 
</MovingComponent></h1>
        <h5 className="text-light">Frontend Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={myPic} alt="Myself" />
        </div>
      </div>
    </header>
  )
}

export default Header