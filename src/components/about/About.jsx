import React from "react";
import { FcWorkflow } from "react-icons/fc";
import { BsPeople, BsAppIndicator } from "react-icons/bs";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me-image">
          <img
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Programming Animation"
          />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FcWorkflow className="about_icon" />
              <h5>Experienced</h5>
            </article>
            <article className="about_card">
              <BsPeople className="about_icon" />
              <h5>Reliable</h5>
            </article>
            <article className="about_card">
              <BsAppIndicator className="about_icon" />
              <h5>Problem Solver</h5>
            </article>
          </div>
          <p>
            Solution-focused Software Engineer with experience in web and mobile
            applications development, Logical and results-driven Developer dedicated to
            building and optimizing user-focused Solutions for customers with
            various business objectives.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
