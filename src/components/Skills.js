import React from "react";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <h3 className='section-title'>SKILLS</h3>
      <article>
        <ul className='skills-list'>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </article>
    </section>
  );
};

export default Skills;
