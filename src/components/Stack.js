import React from "react";
import { stack } from "../data/data";
import { motion } from "framer-motion";

const Stack = () => {
  return (
    <section className='stack' id='stacks'>
      <h3 className='section-title'>STACKS</h3>
      <motion.div className='grid-container'>
        {stack.map((item, index) => {
          const { logo, name, years } = item;
          return (
            <motion.div className='item' key={index}>
              <div className={`logo ${name}`}>{logo}</div>
              <div className='info'>
                <h5>{name}</h5>
                <h6>{years}</h6>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Stack;
