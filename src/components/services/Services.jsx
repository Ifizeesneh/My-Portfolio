import React from "react"
import { BiCheck } from "react-icons/bi"
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>To upgrade your web application</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Get a modern user interface and functionality meeting customers’ expectations</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Build a web app quickly integrating the existing code</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Effectively solve the app's technical issues while upgrading</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Build a web app that will change people’s minds</p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>To create a web app from scratch</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Develop a product that is self-explanatory and straightforward</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Develop a stable and scalable MVP of your app for global release</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Implement a web app with reliable functionality that looks slick and responsive.</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Managing software workflow.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>To customize your web application</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Integrate new features that your customers ask for</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Get a clean and intuitive design that guarantees a smooth UX</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Create a high-quality app that will get positive customers' feedback</p>
            </li>
            <li>
              <BiCheck  className="service_list-icon"/>
              <p>Enhance your web app with a team dedicated to making your ideas work.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
