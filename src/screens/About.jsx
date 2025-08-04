import React from 'react';
import AboutSection from '../MainComponents/AboutComponents/AboutSection';
import VisionSection from '../MainComponents/AboutComponents/VisionSection';
import ContributionSection from '../MainComponents/AboutComponents/ContributionSection';
import MissionSection from '../MainComponents/AboutComponents/MissionSection';
import ModusOperandiSection from '../MainComponents/AboutComponents/ModusOperandiSection';
import SpaceDomainsSection from '../MainComponents/AboutComponents/SpaceDomainsSection';
import AwardsSection from '../MainComponents/AboutComponents/AwardsSection';
import AboutCoreContent from '../MainComponents/AboutComponents/AboutCoreContent';

const About = () => {
  return (
    <div style={{ backgroundColor: "#1f1f1f" }}>
      <AboutSection />
      <AboutCoreContent/>
    </div>
  );
};

export default About; 