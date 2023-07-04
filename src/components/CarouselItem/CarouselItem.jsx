import React from 'react';
import propTypes from 'prop-types';

import './CarouselItem.css';

const CarouselItem = ({ colection, title, desc, imgUrl }) => {
  return (
    <section className="carousel-item">
      <div style={{backgroundImage: `url(${imgUrl})`}} className="carousel-img"></div>
      <div className="carousel-desc">
        <span>{colection}</span>
        <h1 className="carousel-title title">{title}</h1>
        <p>{desc}</p>
        <button className="carousel-btn">See More</button>
      </div>
    </section>
  );
};

export default CarouselItem;

CarouselItem.propTypes = {
  colection: propTypes.string,
  title: propTypes.string,
  desc: propTypes.string, 
  imgUrl: propTypes.string, 
};
