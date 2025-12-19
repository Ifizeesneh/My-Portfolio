import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import { FaHandSparkles, FaLaptopCode } from "react-icons/fa";


const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 1
      }
    }
  };

  return (
    <header className="creative-header" ref={ref}>
      {/* Enhanced Background Particles */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Connection Lines */}
      <div className="connection-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      
      <motion.div 
        className="container header_container"
        id="home"
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        <motion.div 
          className="icon-container"
          variants={iconVariants}
        >
          <FaLaptopCode className="main-icon" />
          <motion.div 
            className="sparkle"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <FaHandSparkles className="sparkle-icon" />
          </motion.div>
        </motion.div>

        <motion.h1 variants={itemVariants}>
          Ifeoluwa <span className="accent-text">Dele-Oyero</span>
        </motion.h1>
        
        <motion.div 
          className="title-container"
          variants={itemVariants}
        >
          <h2 className="job-title">
            <span className="title-line">Software Engineer</span>
            {/* <span className="title-subline">Frontend Specialist</span> */}
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <CTA />
        </motion.div>

        <motion.div 
          className="socials-container"
          variants={itemVariants}
        >
          <HeaderSocials />
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;