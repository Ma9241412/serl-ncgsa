import React from 'react';  
import { Grid } from 'antd';
import VisionSection from './VisionSection';
import ContributionSection from './ContributionSection';
import MissionSection from './MissionSection';
import ModusOperandiSection from './ModusOperandiSection';
import SpaceDomainsSection from './SpaceDomainsSection';
import AwardsSection from './AwardsSection';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { useBreakpoint } = Grid;

const AboutCoreContent = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const isSmallMobile = !screens.sm;
  
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
        <VisionSection />
        <ContributionSection />
        <MissionSection />
        <ModusOperandiSection />
        <SpaceDomainsSection />
        <AwardsSection />
      </div>
    </div>
  );
};

export default AboutCoreContent;
