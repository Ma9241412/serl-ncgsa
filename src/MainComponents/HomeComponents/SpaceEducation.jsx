import React from 'react';
import { Row, Col, Typography, Grid, Button, Carousel, Card } from 'antd';
import '../../Styles/Home.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const isMobile = !useBreakpoint().lg;
  const carouselRef = React.useRef(null);

  const images = [
    {
      src: require('../../assets/images/slider1.png'),
      alt: 'Space Research Background'
    },
    {
      src: require('../../assets/images/slider2.png'),
      alt: 'Space Education Main'
    },
    {
      src: require('../../assets/images/slider3.png'),
      alt: 'SERL Organization'
    }
  ];


  return (
  <Row className="se-wrapper" justify="start">
  <Col xs={24} lg={24} className="se-text-col">
  <Row justify="start" className="se-row-text">
          <Col xs={24} lg={24} className="se-text-col">
            <Title className="se-title">
              Space <span className="se-title-highlight">Education</span>
            </Title>
            <Paragraph className="se-paragraph">
              SERL addresses the gap in space awareness and education at national level by implementing interactive, creative and innovative pedagogical methods on the grass root level. Through its dynamic STEM and STEAM initiatives including workshops, teacher trainings, specialized schools, competitions, seminars, webinars, and national summits, SERL attracts a diverse community of students, professionals and educators.
            </Paragraph>
          </Col>
        </Row>

  <Row justify="start" className="se-row-carousel">
          <Col xs={24} lg={24} className="se-carousel-col">
            <div className="se-carousel-wrapper">
              <Carousel
                ref={carouselRef}
                autoplay
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
                  <img key={index} src={image.src} alt={image.alt} className="se-slide-img" />
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>

  <Row className="se-row-button" justify="start">
    <Col xs={24} lg={24} className="se-button-col" style={{ textAlign: "left" }}>
      <Button type="primary" size="large" className="se-button">
        For More Details
      </Button>
    </Col>
  </Row>
      </Col>
    </Row>
  );
};

export default React.memo(SpaceOutreach);