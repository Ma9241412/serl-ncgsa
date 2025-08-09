import React, { useState } from 'react';
import { Row, Col, Typography, Grid, Button, Carousel, Card } from 'antd';
import '../../Styles/CapacityBuilding.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
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
    <Row className="cb-wrapper" justify="start">
      <Row justify="start" className="cb-row-text">
        <Col xs={24} lg={23} className="cb-text-col">
          <Title level={2} className="cb-title">
            Capacity <span className="cb-title-highlight">Building</span>
          </Title>
          <Paragraph className="cb-paragraph">
            SERL’s capacity-building initiatives focus on empowering students, educators, professionals, and institutions by enhancing expertise and advancing knowledge in space science and technology, contributing to a nationally cohesive framework for space science education.
          </Paragraph>
        </Col>
      </Row>

      <Row justify="start" className="cb-row-carousel">
        <Col xs={24} lg={24} className="cb-carousel-col">
          <div className="cb-carousel-wrapper" onMouseEnter={() => setAutoplayEnabled(false)} onMouseLeave={() => setAutoplayEnabled(true)}>
            <Carousel 
              ref={carouselRef}
              autoplay={autoplayEnabled}
              autoplaySpeed={3000}
              dots={false}
              speed={1000}
              effect="scroll"
              slidesToShow={isMobile ? 1 : 3}
              slidesToScroll={1}
              pauseOnHover={true}
              centerMode={false}
            >
              {images.map((image, index) => (
                <Card key={index} bordered={false} className="cb-slide-card" hoverable>
                  <img src={image.src} alt={image.alt} className="cb-slide-img" />
                </Card>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>

      <Row className="cb-row-button">
        <Col xs={24} lg={20} className="cb-button-col">
          <Button 
            type="primary"
            size="large"
            className="cb-button"
          >
            For More Details
          </Button>
        </Col>
      </Row>
    </Row>
  );
};

export default React.memo(SpaceOutreach);
