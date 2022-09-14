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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            felis, congue felis, nulla faucibus elementum enim arcu. Quis ut
            suspendisse nec dictumst leo nunc. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla ut felis, congue felis, nulla
            faucibus elementum enim arcu.
          </motion.p>
        </motion.div>
        <div className='buttons'>
          <motion.button
            className='hire-btn'
            variants={headerBtnsVaraints}
            initial='hidden'
            whileInView='visible'
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            exit={{ x: "100%", delay: 0.5 }}
          >
            HIRE ME
          </motion.button>
          <motion.button
            className='resume-btn'
            variants={headerBtnsVaraints}
            initial='hidden'
            whileInView='visible'
            transition={{ type: "spring", stiffness: 200 }}
            exit={{ x: "100%" }}
          >
            VIEW RESUME
          </motion.button>
        </div>
      </header>
    </AnimatePresence>
  );
};

export default Header;
