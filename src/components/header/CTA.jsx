import React from "react"
import CV from "../../assets/DELE-OYERO IFEOLUWA.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" className="btn" rel="noreferrer">
        View CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
