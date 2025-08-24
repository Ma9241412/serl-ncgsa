import React, { useState } from 'react';
import { Row, Col, Typography, Grid, Button, Carousel, Card } from 'antd';
import '../../Styles/Home.css';

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
    <div className="so-wrapper">
      <Row justify="start">
        <Col xs={24} lg={24}>
          <div className="so-row-text">
            <div className="so-text-col">
              <Title level={2} className="so-title">
                Capacity <span className="so-title-highlight">Building</span>
              </Title>
              <Paragraph className="so-paragraph">
                SERL’s capacity-building initiatives focus on empowering students, educators, professionals, and institutions by enhancing expertise and advancing knowledge in space science and technology, contributing to a nationally cohesive framework for space science education.
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={24}>
          <div className="so-row-carousel">
            <div className="so-carousel-col">
              <div className="so-carousel-wrapper">
                <Carousel 
                  ref={carouselRef}
                  autoplay={autoplayEnabled}
                  autoplaySpeed={3000}
                  dots={false}
                  infinite
                  speed={1000}
                  effect="scroll"
                  slidesToShow={isMobile ? 1 : 3}
                  slidesToScroll={1}
                  pauseOnHover={true}
                  centerMode={false}
                >
                  {images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={24}>
          <div className="so-row-button" style={{ textAlign: "left" }}>
            <div className="so-button-col">
              <Button type="primary" size="large" className="so-button">
                For More Details
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(SpaceOutreach);
