import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from '../CarouselItem/CarouselItem';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './CarouselComponent.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel 
      showThumbs={false}
      autoPlay 
      interval={5000} 
      showStatus={false} 
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${ hasPrev ? 'l-absolute' : 'hidden'} arrow`}
            onClick={clickHandler}
          >
            <AiOutlineArrowLeft size={30}/>
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${hasNext ? 'r-absolute' : 'hidden'} arrow`}
            onClick={clickHandler}
          >
            <AiOutlineArrowRight size={30} />
          </div>
        );
      }}
    >
      <CarouselItem 
        colection="IKIGAI" 
        title="Leather bags worth hugging." 
        desc="Keep your everyday style chic and on-trend with our selection 20+ styles to choose from." 
        imgUrl="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg" 
      />
      <CarouselItem 
        colection="IKIGAI" 
        title="Leather bags worth hugging." 
        desc="Keep your everyday style chic and on-trend with our selection 20+ styles to choose from." 
        imgUrl="https://cdn.pixabay.com/photo/2016/11/21/16/01/woman-1846127_1280.jpg" 
      />
      <CarouselItem 
        colection="IKIGAI" 
        title="Leather bags worth hugging." 
        desc="Keep your everyday style chic and on-trend with our selection 20+ styles to choose from." 
        imgUrl="https://cdn.pixabay.com/photo/2019/03/28/06/05/people-4086437_1280.jpg" 
      />
    </Carousel> 
  );
};

export default CarouselComponent;
