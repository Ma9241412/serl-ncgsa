import React from 'react';  
import StatsSection from './StatsSection';
import SpaceOutreach from './SpaceOutreach';
import SpaceEducation from './SpaceEducation';
import CapacityBuilding from './CapacityBuilding';
import homemainbg from '../../assets/images/homemainbg.jpg';

const SpaceComponent = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${homemainbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Overlay for better text readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}
      />
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <StatsSection />
        <SpaceOutreach />
        <SpaceEducation />
        <CapacityBuilding />
      </div>
    </div>
  );
};

export default SpaceComponent;
