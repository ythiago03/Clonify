import React from 'react';

import './CarouselItem.css';

const CarouselItem = () => {
  return (
    <section className="carousel-item">
      <div className="carousel-img">
        <img src="https://cdn.pixabay.com/photo/2016/03/27/19/57/cold-1284030_1280.jpg"     alt="" />
      </div>
      <div className="carousel-desc">
        <span>IKIGAI</span>
        <h1 className="carousel-title title">Leather bags worth hugging.</h1>
        <p>Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.</p>
        <button>
          <a href="/">See More</a>
        </button>
      </div>
    </section>
  );
};

export default CarouselItem;
