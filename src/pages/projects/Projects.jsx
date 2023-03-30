/* eslint-disable import/no-unresolved */
import './Projects.scss';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

function Projects() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('./src/database/database.json')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="containerProjects" id="projects">
      <div className="body">
        <h1>Some of my Projects</h1>
        <Swiper
          className="cards mySwiper"
          autoplay={
                        {
                          delay: 10000,
                          disableOnInteraction: false,
                          reverseDirection: true,
                        }
                    }
          modules={
                        [Autoplay]
                    }
        >
          {
data?.map((res) => (
  <SwiperSlide className="mainCard" key={res.id}>
    <div className="card">
      <img src={res.img} alt={res.name} />
      <div className="description">
        <h1>{res.name}</h1>
        <div className="about">
          <span>{res.description}</span>
        </div>
        <h5>Tecnolgies</h5>
        <ul>
          {
        res?.lenguajes?.map((itm) => <li key={res.id * Math.random() * 100}>{itm}</li>)
        }
        </ul>
      </div>
      <div className="navigation">
        <div onClick={() => window.open(res.code)}>
          <BiCodeAlt className="code" />
          <span>code</span>
        </div>
        <div onClick={() => window.open(res.browse)}>
          <MdOutlineKeyboardDoubleArrowRight className="browse" />
          <span>online</span>
        </div>
      </div>
    </div>
  </SwiperSlide>
))
}
        </Swiper>
      </div>
    </div>
  );
}
export default Projects;
