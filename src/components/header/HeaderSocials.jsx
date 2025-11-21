import React from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
  const socialVariants = {
    hover: {
      scale: 1.15,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className='header__socials'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a 
        href="https://www.linkedin.com/in/ifeoluwa-dele-oyero-63411a223/" 
        target="_blank" 
        rel="noreferrer"
        variants={itemVariants}
        whileHover={socialVariants.hover}
        whileTap={socialVariants.tap}
        className="social-link"
      >
        <BsLinkedin />
      </motion.a>
      
      <motion.a 
        href="https://github.com/Ifizeesneh" 
        target="_blank" 
        rel="noreferrer"
        variants={itemVariants}
        whileHover={socialVariants.hover}
        whileTap={socialVariants.tap}
        className="social-link"
      >
        <FaGithub />
      </motion.a>
      
      <motion.a 
        href="https://twitter.com/ifizeesneh" 
        target="_blank" 
        rel="noreferrer"
        variants={itemVariants}
        whileHover={socialVariants.hover}
        whileTap={socialVariants.tap}
        className="social-link"
      >
        <FaTwitter />
      </motion.a>

      <div className="socials-line"></div>
    </motion.div>
  );
}

export default HeaderSocials;