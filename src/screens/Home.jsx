import React from 'react';
import HeroSection from '../MainComponents/HomeComponents/HeroSection';
import StatsSection from '../MainComponents/HomeComponents/StatsSection';
import SpaceOutreach from '../MainComponents/HomeComponents/SpaceOutreach';
import SpaceEducation from '../MainComponents/HomeComponents/SpaceEducation';
import CapacityBuilding from '../MainComponents/HomeComponents/CapacityBuilding';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <SpaceOutreach />
      <SpaceEducation />
      <CapacityBuilding />
    </div>
  );
};

export default Home;
