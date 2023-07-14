import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import Sponsors from '../../components/Sponsors/Sponsors';

import './Home.css';
import Products from '../../components/Products/Products';

function Home() {

  return (
    <>
      <header>
        <Navbar />
        <CarouselComponent />
      </header>
      <main>
        <Sponsors />
        <Products />
      </main>
    </>
  );
}

export default Home;
