import React from "react";
import { Row, Col, Typography, Grid, Carousel } from "antd";
import "../../Styles/About.css";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

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
    <Row justify="center" gutter={[32, 32]}>
      {/* Left Text Section */}
      <Col xs={24} lg={24}>
        <Title className="sub-title">Vision</Title>
        <div className="yellow-thin-underline" />
        <Paragraph className="main-paragraph">
          In pursuit of achieving United Nations Sustainable Development Goals
          (SDGs) through space technology, particularly focusing on their
          relevance to developing countries, our dedicated team of researchers
          embarked on a pioneering endeavor to establish Space Education
          Research Lab (SERL) in 2020 at a public university, the Institute of
          Space Technology at Islamabad, Pakistan. SERL envisions to foster
          space awareness, education, and outreach across schools, colleges, and
          universities, building a resilient pipeline of talent for the growing
          space ecosystem. With a commitment to expanding the frontiers of space
          knowledge, SERL actively drives the dissemination of space education
          through space-related festivities to raise awareness about space
          technology and its applications among the broader community.
        </Paragraph>
      </Col>

      {/* Right Carousel Section */}
      <Col xs={24} lg={24} >
        <Carousel
          autoplay
          autoplaySpeed={2000}
          speed={1000}
          dots={true}
          slidesToShow={isMobile ? 1 : 3}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  height: isMobile ? "220px" : "350px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default React.memo(SpaceOutreach);
