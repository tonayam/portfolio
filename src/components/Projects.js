import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { projects } from '../data/data';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h3 className='section-title'>PROJECTS</h3>
      <Swiper slidesPerView={'auto'} spaceBetween={30} className='mySwiper'>
        {projects.map((project, id) => {
          const { title, brief, live, code, image, techStack } = project;

          return (
            <SwiperSlide className='project' key={id}>
              <div className='img-container'>
                <img src={image} alt={title} />
              </div>
              <div className='text'>
                <h4>{title}</h4>
                <p>{brief}</p>
                <div className='icons'>
                  {techStack.map((stack, index) => {
                    return <li key={index}>{stack}</li>;
                  })}
                </div>
              </div>
              <div className='buttons'>
                <button>
                  <a href={live} rel='noreferrer' target='_blank'>
                    <FaExternalLinkAlt className='icon' /> VISIT WEBSITE
                  </a>
                </button>
                <button>
                  <a href={code} rel='noreferrer' target='_blank'>
                    <BsCodeSlash className='icon' /> CODE
                  </a>
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
