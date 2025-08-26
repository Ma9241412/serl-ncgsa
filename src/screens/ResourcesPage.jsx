import React from 'react';
import ResourceHero from '../MainComponents/ResourceComponents/ResourceHero';
import ResourceSpaceSummerSchool from '../MainComponents/ResourceComponents/ResourceSpaceSummerSchool';
import ResourceWorldSpaceWeek from '../MainComponents/ResourceComponents/ResourceWorldSpaceWeek';
import SolarObservationSession from '../MainComponents/ResourceComponents/SolarObservationSession';
import ResourceICAST2025 from '../MainComponents/ResourceComponents/ResourceICAST2025';
import ResourceDrAbdusSalamContest from '../MainComponents/ResourceComponents/ResourceDrAbdusSalamContest';
import ResourceAstronomyCamp from '../MainComponents/ResourceComponents/ResourceAstronomyCamp';
import mainhomebg from '../assets/images/homemainbg.jpg';

const ResourcesPage = () => {
  return (
    <>
      <ResourceHero />

             <div style={{
          backgroundImage: `url(${mainhomebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh'
        }}>  

        <div className="global-layout">
 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
  <SolarObservationSession />
  <ResourceSpaceSummerSchool />
  <ResourceWorldSpaceWeek />
  <ResourceAstronomyCamp />
  <ResourceICAST2025 />
  <ResourceDrAbdusSalamContest />
</div>
         </div>
        </div>
 
    </>
  );
};

export default ResourcesPage;