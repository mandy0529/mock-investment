import React from 'react';
import {MarketTrend, News} from '../components';
import Hero from '../components/Home/Hero';

function Home() {
  return (
    <>
      <Hero />
      <MarketTrend />
      <News />
    </>
  );
}

export default Home;
