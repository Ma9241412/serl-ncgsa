import React from "react";
import { Row, Col, Typography, Grid, Button, Carousel } from "antd";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

import "../../Styles/Home.css";

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
    <Row gutter={[32, 32]} align="middle" >
      <Col xs={24} md={12} lg={24}>
        <Title className="so-title">
          Space <Text className="so-title-highlight">Outreach</Text>
        </Title>
        <Paragraph className="so-paragraph">
          SERL’s Space Outreach program is designed to bring space science and
          technology closer to students, educators, and the general public.
          Through workshops, interactive sessions, science fairs, and hands-on
          projects, participants gain exposure to satellite systems, remote
          sensing, and GIS applications. These initiatives aim to spark
          curiosity, enhance understanding of space technology, and encourage
          young minds to pursue careers in STEM fields. SERL also collaborates
          with schools, universities, and local organizations to ensure that
          outreach programs reach diverse communities across the country.
        </Paragraph>
        <Button type="primary" size="large" className="so-button">
          Read More
        </Button>
      </Col>

      <Col xs={24} md={12} lg={24}>
        <div
          onMouseEnter={() => setAutoplayEnabled(false)}
          onMouseLeave={() => setAutoplayEnabled(true)}
        >
          <Carousel
            autoplay={autoplayEnabled}
            autoplaySpeed={2000}
            dots={true}
            speed={1000}
            slidesToShow={isMobile ? 1 : 3}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: isMobile ? "200px" : "350px",
                    objectFit: "contain",
                    borderRadius: "12px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};

export default React.memo(SpaceOutreach);
