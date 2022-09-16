import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.svg";

import { navVariant, navLinksVariant } from "../animation/variants";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  // SMOOTH SCROLLING FIX
  const navLinks = document.querySelectorAll(`.link`);
  navLinks.forEach((link) => {
    link.addEventListener(`click`, (e) => {
      e.preventDefault();
      const id = e.currentTarget.getAttribute(`href`).slice(1);
      const element = document.getElementById(id);
      const position = element.offsetTop - window.innerHeight;
      console.log(position);
      window.scrollTo({
        left: 0,
        top: position,
      });
      setShowNav(false);
    });
  });

  return (
    <motion.nav
      className='navbar'
      variants={navVariant}
      initial='hidden'
      animate='visible'
    >
      <div className='logo'>
        <img src={logo} alt='' />
        <button className='icon' onClick={() => setShowNav(!showNav)}>
          {showNav ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`nav-links ${showNav && `show-nav`}`}>
        <motion.li variants={navLinksVariant}>
          <a href='#stacks' className='link'>
            STACKS
          </a>
        </motion.li>
        <motion.li variants={navLinksVariant}>
          <a href='#projects' className='link'>
            PROJECTS
          </a>
        </motion.li>
        <motion.li variants={navLinksVariant}>
          <a href='#work' className='link'>
            WORK EXPERIENCE
          </a>
        </motion.li>
        <motion.li variants={navLinksVariant}>
          <a href='#skills' className='link'>
            SKILLS
          </a>
        </motion.li>
        <motion.li variants={navLinksVariant}>
          <a href='#contact' className='link'>
            CONTACT ME
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
