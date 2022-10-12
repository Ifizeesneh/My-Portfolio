import React from "react"
import "./portfolio.css"
import intercity from "../../assets/intercity.png"
import fizeefoods from "../../assets/fizeefoods.png"
import howbodi from "../../assets/howbodi.png"
import fixmeet from "../../assets/fixmeet.png"
import fizeeflix from "../../assets/fizeeflix.png"
import myestate from "../../assets/myestate.png"

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
          <h3>Intercity Web Site</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://intercity.ng"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={fizeefoods} alt="fizee foods" />
          </div>
          <h3>Food Ordering Site</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/Ifizeesneh/fizeeFoods"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://fizeefoods.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={howbodi} alt="howbodi page" />
          </div>
          <h3>Howbodi Website</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://howbodiwebsite.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={fixmeet} alt="Fixmeet App" />
          </div>
          <h3>Fixmeet App for sheduled meetings</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/Ifizeesneh/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://fixmeet.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={fizeeflix} alt="intercity page" />
          </div>
          <h3>My Movie site showing Top 500 movies from TMDB</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/Ifizeesneh/fizeeflix"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://ifizeeflix.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={myestate} alt="My Estate App" />
          </div>
          <h3>My Estate App</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/Ifizeesneh/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://myestate.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
