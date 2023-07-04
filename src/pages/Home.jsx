import React from 'react';

import Navbar from '../components/Navbar/Navbar';

import './Home.css';
import CarouselComponent from '../components/CarouselComponent/CarouselComponent';

function Home() {

  return (
    <>
      <header>
        <Navbar />
        <CarouselComponent />
      </header>
    </>
  );
}

export default Home;
