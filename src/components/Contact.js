import React from "react";
import { socials } from "../data/data";

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h3 className='section-title'>CONTACT ME</h3>
      <div className='socials'>
        {socials.map((social) => {
          const { name, icon, iconName } = social;
          return (
            <div className='social'>
              <img src={icon} alt={iconName} />
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
