import React from "react";
import { work } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Work = () => {
  return (
    <section className='work' id='work'>
      <h3 className='section-title'>WORK EXPERIENCE</h3>
      <Swiper slidesPerView={"auto"} spaceBetween={30} className='mySwiper'>
        {work.map((job, index) => {
          const { company, position, time, info } = job;

          return (
            <SwiperSlide className='job' key={index}>
              <article>
                <div className='card-header'>
                  <h4 className='company'>{company}</h4>
                  <p>{time}</p>
                </div>
                <p>{position}</p>
                <p className='info'>{info}</p>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className='resume-btn'>View my resume</button>
    </section>
  );
};

export default Work;
