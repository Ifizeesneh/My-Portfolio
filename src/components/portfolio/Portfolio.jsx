import React from "react"
import "./portfolio.css"
import intercity from "../../assets/intercity.png"
import Aichecker from "../../assets/aichecker.png"
import vittas from "../../assets/vittas.png"
import bezal from "../../assets/bezal.png"
import zealight from "../../assets/zealight.png"
import vittasApp from "../../assets/vittasApp.png"

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
          <p>Find Bus Tickets in Nigeria, Search, compare, and easily book from 100+ operators online in Nigeria</p>
          <div className="portfolio_item-cta">
            {" "}
            {/* <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a> */}
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
            <img src={Aichecker} alt="fizee foods" />
          </div>
          <h3>AI Content Detector Tool</h3>
          <p> You can detect if a text is Human written, AI/GPT Generated, or a combination of both</p>
          <div className="portfolio_item-cta">
            {" "}
            {/* <a
              href="https://github.com/Ifizeesneh/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a> */}
            <a
              href="https://aicheckertool.com/"
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
            <img src={vittas} alt="Vittas page" />
          </div>
          <h3>Vittas International Website</h3>
          <p>Vittas helps hospitals and pharmacies with access to cheap and affordable loans.</p>
          <div className="portfolio_item-cta">
            {" "}
            {/* <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a> */}
            <a
              href="https://www.vittasinternational.com/"
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
            <img src={bezal} alt="Bezal Homes" />
          </div>
          <h3>Bezal Homes</h3>
          <p>Bezal Homes stands as a distinctive high-end luxury homes development company within the real estate sector.</p>
          <div className="portfolio_item-cta">
            {" "}
            {/* <a
              href="https://github.com/Ifizeesneh/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a> */}
            <a
              href="https://bezalhomes.ng/"
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
            <img src={zealight} alt="Zealight web page" />
          </div>
          <h3>Zealight Innovation Labs</h3>
          <p>Zealight is a technology company dedicated to building modern digital products</p>
          <div className="portfolio_item-cta">
            {" "}
            {/* <a
              href="https://github.com/Ifizeesneh/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a> */}
            <a
              href="https://zealightlabs.com/"
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
            <img src={vittasApp} alt="Vittas App" />
          </div>
          <h3>Vittas Mobile App</h3>
          <p> Vittas app is designed to simplify the financial management of your healthcare business.</p>
          <div className="portfolio_item-cta">
            {" "}
            {/* <a
              href="https://github.com/Ifizeesneh/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a> */}
            <a
              href="https://play.google.com/store/apps/details?id=com.vittas&hl=en"
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
