import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  headerVariant,
  headerTextVariant,
  headerBtnsVaraints,
} from "../animation/variants";

const Header = () => {
  return (
    <AnimatePresence>
      <header className=' header'>
        <motion.div
          className='text'
          variants={headerVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
        >
          <motion.p variants={headerTextVariant}>Hello, My name is </motion.p>
          <motion.h2 variants={headerTextVariant}>Austin Tonayam</motion.h2>
          <motion.p variants={headerTextVariant}>I am a </motion.p>
          <motion.h1 variants={headerTextVariant}>Web Developer</motion.h1>
          <motion.p className='info' variants={headerTextVariant}>
            Building interactive websites with the latest web technologies is
            something I am very passionate about. I spend most of my time trying
            to figure out how to build my next interactive website, and when I'm
            not doing that... I play video games
          </motion.p>
        </motion.div>
        <div className='buttons'>
          <motion.button
            className='hire-btn'
            variants={headerBtnsVaraints}
            initial='hidden'
            whileInView='visible'
            exit={{ x: "100%", delay: 0.5 }}
          >
            <a
              href='mailto:tonayam99@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              HIRE ME
            </a>
          </motion.button>
          <motion.button
            className='resume-btn'
            variants={headerBtnsVaraints}
            initial='hidden'
            whileInView='visible'
            exit={{ x: "100%" }}
          >
            <a
              href='https://drive.google.com/file/d/15bW1JH-sTqoVSOxgqV3qJ-qUq9OM0pd6/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              VIEW RESUME
            </a>
          </motion.button>
        </div>
      </header>
    </AnimatePresence>
  );
};

export default Header;
