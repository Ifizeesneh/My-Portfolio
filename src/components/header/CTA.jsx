import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import CV from "../../assets/IFEOLUWA.pdf";

const CTA = () => {
  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div className="cta">
      <motion.a
        href={CV}
        target="_blank"
        className="btn"
        rel="noreferrer"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        View CV
      </motion.a>
      <motion.a
        href="#contact"
        className="btn btn-primary"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;