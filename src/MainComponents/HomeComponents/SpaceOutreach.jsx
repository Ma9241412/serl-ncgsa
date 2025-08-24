import React from 'react';
import { Row, Col, Typography, Grid, Button, Carousel, Card } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../../Styles/Home.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
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
                Space <span className="so-title-highlight">Outreach</span>
              </Title>
              <Paragraph className="so-paragraph">
                The Space Education Research Lab (SERL) is committed to promote space science & technology by engaging school, 
                college & university students, educators, professionals, and communities through nationwide outreach, hands-on learning, 
                and educational support. With the national-level engagement and powerful outreach, SERL strives to nurture space-literate 
                and future-ready society prepared to lead and innovate in the evolving space sector.
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={24}>
          <div className="so-row-carousel">
            <div className="so-carousel-col">
              <div className="so-carousel-wrapper" onMouseEnter={() => setAutoplayEnabled(false)} onMouseLeave={() => setAutoplayEnabled(true)}>
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
}

export default React.memo(SpaceOutreach);
