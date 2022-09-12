import React from "react";

const Header = () => {
  return (
    <header className=' header'>
      <div className='text'>
        <p>Hello, My name is </p>
        <h2>Austin Tonayam</h2>
        <p>I am a </p>
        <h1>Web Developer</h1>
        <p className='info'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
          felis, congue felis, nulla faucibus elementum enim arcu. Quis ut
          suspendisse nec dictumst leo nunc. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla ut felis, congue felis, nulla
          faucibus elementum enim arcu.
        </p>
      </div>
      <div className='buttons'>
        <button className='hire-btn'>HIRE ME</button>
        <button className='resume-btn'>VIEW RESUME</button>
      </div>
    </header>
  );
};

export default Header;
