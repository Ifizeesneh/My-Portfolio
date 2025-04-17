import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {RiCss3Line} from 'react-icons/ri'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
import { TbBrandReactNative } from "react-icons/tb";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>Computing & Soft Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <AiFillHtml5 className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience_details'>
              <RiCss3Line className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience_details'>
              <TbBrandJavascript className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience_details'>
              <FaReact className='experience_details-icon'/>
              <div>
              <h4>React Js</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience_details'>
              <SiTypescript className='experience_details-icon'/>
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience_details'>
              <TbBrandNextjs className='experience_details-icon'/>
              <div>
              <h4>NextJs</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience_details'>
              <SiTailwindcss className='experience_details-icon'/>
              <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience_details'>
              <TbBrandReactNative className='experience_details-icon'/>
              <div>
              <h4>React Native</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Soft Skills</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Delivery</h4>
              <small className='text-light'>Perfect</small>
              </div>
             
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Problem Solving</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Time Management</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Team Work</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Creativity</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience