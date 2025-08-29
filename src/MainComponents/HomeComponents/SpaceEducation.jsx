import React from "react";
import { Row, Col, Typography, Grid, Button, Carousel, Card } from "antd";
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const SpaceEducation = () => {
  const [autoplayEnabled, setAutoplayEnabled] = React.useState(true);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const images = [
    {
      src: require("../../assets/images/slider1.png"),
      alt: "Space Research Background",
    },
    {
      src: require("../../assets/images/slider2.png"),
      alt: "Space Education Main",
    },
    {
      src: require("../../assets/images/slider3.png"),
      alt: "SERL Organization",
    },
  ];

  return (
    <Row justify="start">
      <Col>
        <Title className="so-title">
          Space <Text className="so-title-highlight">Education</Text>
        </Title>
        <Paragraph className="so-paragraph">
          SERL’s Space Education programs provide students and enthusiasts with comprehensive learning opportunities in space science, satellite technology, and geospatial sciences. Our curriculum includes lectures, workshops, laboratory exercises, and online courses that cover remote sensing, GIS mapping, satellite communications, and data analysis. By integrating theoretical knowledge with hands-on practice, participants develop technical skills, problem-solving abilities, and research competence. These programs are designed to prepare the next generation of space scientists and engineers, equipping them to contribute effectively to national and international space initiatives.
        </Paragraph>
      </Col>
      <Col>
        <div
          onMouseEnter={() => setAutoplayEnabled(false)}
          onMouseLeave={() => setAutoplayEnabled(true)}
        >
          <Carousel
            autoplay={autoplayEnabled}
            autoplaySpeed={3000}
            dots={false}
            speed={1000}
            slidesToShow={isMobile ? 1 : 3}
          >
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Carousel>
        </div>
      </Col>
      <Col>
        <Button type="primary" size="large" className="so-button">
          Read More
        </Button>
      </Col>
    </Row>
  );
};

export default React.memo(SpaceEducation);
