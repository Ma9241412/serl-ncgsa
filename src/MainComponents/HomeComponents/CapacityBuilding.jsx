import React from "react";
import { Row, Col, Typography, Grid, Button, Carousel, Card } from "antd";
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const CapacityBuilding = () => {
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
          Capacity <Text className="so-title-highlight">Building</Text>
        </Title>
        <Paragraph className="so-paragraph">
          The Space Education Research Lab (SERL) is committed to promote space
          science & technology by engaging school, college & university
          students, educators, professionals, and communities through nationwide
          outreach, hands-on learning, and educational support. With the
          national-level engagement and powerful outreach, SERL strives to
          nurture space-literate and future-ready society prepared to lead and
          innovate in the evolving space sector.
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

export default React.memo(CapacityBuilding);
