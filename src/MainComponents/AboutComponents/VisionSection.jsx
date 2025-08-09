import React from 'react';
import { Row, Col, Typography, Grid, Carousel, Card } from 'antd';
import '../../Styles/AboutVision.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const carouselRef = React.useRef(null);

  const images = [
    { src: require('../../assets/images/slider1.png'), alt: 'Space Research Background' },
    { src: require('../../assets/images/slider2.png'), alt: 'Space Education Main' },
    { src: require('../../assets/images/slider3.png'), alt: 'SERL Organization' }
  ];

  return (
    <Row className="vision-wrapper" justify="start">
      <Row justify="start" className="vision-row-text">
        <Col xs={24} lg={23} className="vision-text-col">
          <Title level={2} className="vision-title">Vision</Title>
          <div className="section-underline" />
          <Paragraph className="vision-paragraph">
            In pursuit of achieving   United Nations Sustainable Development Goals (SDGs) through   space technology, particularly focusing on their relevance to developing countries,  our dedicated team of researchers embarked on a pioneering endeavor to establish Space Education Research Lab   (SERL) in 2020 at a public university, the Institute   of Space Technology at Islamabad, Pakistan.    SERL envisions to foster space awareness,   education, and outreach    across schools,  colleges, and    universities, building a resilien     pipeline of talent for the growing space ecosystem. With a commitment to expanding the frontiers of space knowledge, SERL actively drives the dissemination of space education though space-related festivities to raise   awareness about space technology and its applications   among the broader
          </Paragraph>
        </Col>
      </Row>
      <Row justify="start" className="vision-row-carousel">
        <Col xs={24} lg={24} className="vision-carousel-col">
          <div className="vision-carousel-wrapper">
            <Carousel
              ref={carouselRef}
              autoplay={false}
              dots={false}
              infinite={false}
              speed={1000}
              effect="scroll"
              slidesToShow={isMobile ? 1 : 3}
              slidesToScroll={1}
              pauseOnHover={false}
              centerMode={false}
            >
              {images.map((image, index) => (
                <Card key={index} bordered={false} className="vision-slide-card" hoverable>
                  <img src={image.src} alt={image.alt} className="vision-slide-img" />
                </Card>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default React.memo(SpaceOutreach);