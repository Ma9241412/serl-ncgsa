import React from 'react';
import { Row, Col, Typography, Grid, Button, Carousel, Card } from 'antd';
import '../../Styles/SpaceEducation.css';

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
    <Row className="se-wrapper" justify="center">
      <Col span={24} className="se-container">
        <Row justify="start" className="se-row-text">
          <Col xs={24} lg={23} className="se-text-col">
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
            <Carousel
              ref={carouselRef}
              autoplay
              autoplaySpeed={3000}
              dots={false}
              speed={1000}
              effect="scroll"
              slidesToShow={isMobile ? 1 : 3}
              slidesToScroll={1}
              pauseOnHover
              centerMode
            >
              {images.map((image, index) => (
                <Card
                  key={index}
                  hoverable
                  bordered={false}
                  className="se-slide-card"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="se-slide-img"
                  />
                </Card>
              ))}
            </Carousel>
          </Col>
        </Row>

        <Row className="se-row-button">
          <Col xs={24} lg={20} className="se-button-col">
            <Button
              type="primary"
              size="large"
              className="se-button"
            >
              For More Details
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default React.memo(SpaceOutreach);