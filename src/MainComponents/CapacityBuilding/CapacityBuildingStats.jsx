import React, { useState } from 'react';
import { Row, Col, Typography, Grid, Button, Carousel, Card } from 'antd';
import '../../Styles/CapacityBuilding.css';
import StatsSection from './StatsSection'; // Import the StatsSection component

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const CapacityBuildingStats = () => {
  const [dotPosition, setDotPosition] = useState('top');
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const carouselRef = React.useRef(null);
  const [autoplayEnabled, setAutoplayEnabled] = React.useState(true);

  const images = [
    { src: require('../../assets/images/slider1.png'), alt: 'Space Research Background' },
    { src: require('../../assets/images/slider2.png'), alt: 'Space Education Main' },
    { src: require('../../assets/images/slider3.png'), alt: 'SERL Organization' }
  ];

  return (
    <>
      <div className="section-container">
        <Title level={2} className="cbs-title">
          Capacity <span className="cbs-title-highlight">Building</span>
        </Title>
        <Paragraph className="cbs-paragraph">
          The National Center of GIS and Space Applications (NCGSA) is committed
          to advancing capacity building through high-impact, experiential learning. 
          Our comprehensive portfolio of workshops and training programs is designed 
          to deliver practical, hands-on exposure across key domains including space 
          science, satellite technology, geographic information systems (GIS), and 
          related disciplines. These programs are strategically developed for students,
          educators, researchers, industry stakeholders, and professionals, equipping
          participants with specialized skills and applied knowledge to drive innovation 
          and contribute effectively to Pakistan’s growing space and geospatial technology
          ecosystem.
        </Paragraph>
      </div>
      <StatsSection />
    </>
  );
}

export default React.memo(CapacityBuildingStats);
