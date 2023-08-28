import React from "react"
import myself from "../../assets/myself.png"
import {FcWorkflow} from 'react-icons/fc'
import {BsPeople, BsAppIndicator} from 'react-icons/bs'
import "./about.css"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={myself} alt="About Myself" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FcWorkflow className="about_icon"/>
              <h5>Experience</h5>
              <small>2+ years</small>
              
              
            </article>
            <article className="about_card">
              <BsPeople className="about_icon"/>
              <h5>Clients</h5>
              <small>20+</small>
            </article>
            <article className="about_card">
              <BsAppIndicator className="about_icon"/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Solution-focused Frontend Engineer with experience in web-based applications and Software Solutions.
             Logical and results- driven Developer dedicated to building and optimizing user-focused Solutions for customers with various business objectives.</p>
           <a href="#contact" className='btn btn-primary'>Lets Talk</a> 
        </div>
      </div>
    </section>
  )
}

export default About
