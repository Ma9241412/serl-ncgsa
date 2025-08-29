import React from "react";
import { Row, Col, Typography, Grid, Button, Carousel, Card } from "antd";
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
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
          Space <Text className="so-title-highlight">Outreach</Text>
        </Title>
        <Paragraph className="so-paragraph">
          SERL’s Space Outreach program is designed to bring space science and technology closer to students, educators, and the general public. Through workshops, interactive sessions, science fairs, and hands-on projects, participants gain exposure to satellite systems, remote sensing, and GIS applications. These initiatives aim to spark curiosity, enhance understanding of space technology, and encourage young minds to pursue careers in STEM fields. SERL also collaborates with schools, universities, and local organizations to ensure that outreach programs reach diverse communities across the country.
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

export default React.memo(SpaceOutreach);
