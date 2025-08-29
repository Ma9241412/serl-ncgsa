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
          SERL’s Capacity Building initiatives aim to develop human resources with the expertise required for a robust space technology ecosystem. Through targeted training programs, internships, collaborative research projects, and mentorship, participants gain hands-on experience in satellite systems, GIS, remote sensing, and data-driven applications. The programs are structured to enhance technical knowledge, research capabilities, and leadership skills, ensuring participants are prepared to meet the growing demands of the space sector. SERL also partners with universities, research centers, and industry leaders to ensure that training remains relevant and impactful, fostering a generation of professionals capable of advancing Pakistan’s space research and technology initiatives.
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
