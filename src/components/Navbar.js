import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <h2>LOGO</h2>
      </div>
      <ul className='nav-links'>
        <li>
          <a href='#stacks'>STACKS</a>
        </li>
        <li>
          <a href='#projects'>PROJECTS</a>
        </li>
        <li>
          <a href='#work'>WORK EXPERIENCE</a>
        </li>
        <li>
          <a href='#skills'>SKILLS</a>
        </li>
        <li>
          <a href='#contact'>CONTACT ME</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
