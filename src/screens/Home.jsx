import React from 'react';
import HeroSection from '../MainComponents/HomeComponents/HeroSection';
import StatsSection from '../MainComponents/HomeComponents/StatsSection';
import SpaceComponent from '../MainComponents/HomeComponents/SpaceComponent';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <SpaceComponent />
    </div>
  );
};

export default Home;
