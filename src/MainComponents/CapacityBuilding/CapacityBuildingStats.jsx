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
        <div className="cbs-content-wrapper">
          <Row justify="start" className="cbs-row-text">
            <Col xs={24} lg={24} className="cbs-text-col">
              <Title level={2} className="cbs-title">
                Capacity <span className="cbs-title-highlight">Building</span>
              </Title>
              <Paragraph className="cbs-paragraph">
                SERL’s capacity-building initiatives focus on empowering students, educators, professionals, and institutions by enhancing expertise and advancing knowledge in space science and technology, contributing to a nationally cohesive framework for space science education.
              </Paragraph>
            </Col>
          </Row>
        </div>
        <StatsSection />
      </>
  );
}

export default React.memo(CapacityBuildingStats);
