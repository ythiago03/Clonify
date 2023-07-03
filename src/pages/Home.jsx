import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Navbar from '../components/Navbar/Navbar';


import './Home.css';
import CarouselItem from '../components/CarouselItem/CarouselItem';

function Home() {

  return (
    <>
      <header>
        <Navbar /><CarouselItem />
        {/* <Carousel className="h-carousel">
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel> */}
      </header>
    </>
  );
}

export default Home;
