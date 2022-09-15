import React from "react";
import { socials } from "../data/data";

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h3 className='section-title'>CONTACT ME</h3>
      <div className='socials'>
        {socials.map((social, index) => {
          const { name, icon, link } = social;
          return (
            <div className='social' key={index}>
              <a href={link} target='_blank' rel='noreferrer'>
                {icon}
              </a>
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
