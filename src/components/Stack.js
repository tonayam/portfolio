import React from "react";
import { stack } from "../data/data";

const Stack = () => {
  return (
    <section className='stack' id='stacks'>
      <h3 className='section-title'>STACKS</h3>
      <div className='grid-container'>
        {stack.map((item, index) => {
          const { logo, name, years } = item;
          return (
            <div className='item' key={index}>
              <div className={`logo ${name}`}>
                <img src={logo} alt={`${name} logo`} />
              </div>
              <div className='info'>
                <h5>{name}</h5>
                <h6>{years}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stack;
