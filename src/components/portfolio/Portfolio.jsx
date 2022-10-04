import React from "react"
import "./portfolio.css"
import intercity from "../../assets/intercity.png"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={intercity} alt="intercity page" />
          </div>
          <h3>Intercity Web Page</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="http://github.com" target="_blank" className="btn">
              Github
            </a>
            <a href="http://intercity.ng" target="_blank" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={intercity} alt="intercity page" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="http://github.com" target="_blank" className="btn">
            Github
            </a>
            <a href="http://github.com" target="_blank" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={intercity} alt="intercity page" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="http://github.com" target="_blank" className="btn">
            Github
            </a>
            <a href="http://github.com" target="_blank" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={intercity} alt="intercity page" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="http://github.com" target="_blank" className="btn">
            Github
            </a>
            <a href="http://github.com" target="_blank" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={intercity} alt="intercity page" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="http://github.com" target="_blank" className="btn">
            Github
            </a>
            <a href="http://github.com" target="_blank" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={intercity} alt="intercity page" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="http://github.com" target="_blank" className="btn">
            Github
            </a>
            <a href="http://github.com" target="_blank" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio
