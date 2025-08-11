import React from 'react';
import { Row, Col, Typography, Grid, Carousel, Image } from 'antd';
import '../../Styles/About.css';

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
    < div className="about-vision-wrapper" >
   

      <Row  className="about-vision-row-carousel">
        <Col xs={24} lg={24} className="about-vision-text-col">
          <Title level={2} className="about-vision-title">Vision</Title>
          <div className="section-underline" />
          <Paragraph className="about-vision-paragraph">
            In pursuit of achieving United Nations Sustainable Development Goals (SDGs) through space technology, particularly focusing on their relevance to developing countries, our dedicated team of researchers embarked on a pioneering endeavor to establish Space Education Research Lab (SERL) in 2020 at a public university, the Institute of Space Technology at Islamabad, Pakistan. SERL envisions to foster space awareness, education, and outreach across schools, colleges, and universities, building a resilient pipeline of talent for the growing space ecosystem. With a commitment to expanding the frontiers of space knowledge, SERL actively drives the dissemination of space education through space-related festivities to raise awareness about space technology and its applications among the broader community.
          </Paragraph>
        </Col>
        <Col xs={24} lg={24} className="about-vision-carousel-col">
            <Carousel
              ref={carouselRef}
              autoplay={false}
              dots={false}
              infinite={false}
              speed={1000}
              slidesToShow={isMobile ? 1 : 3}
              slidesToScroll={3}
              pauseOnHover={false}
              centerMode
            >
              {images.map((image, index) => (
                <Image
                preview={false}
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="about-vision-slide-img"
                />
              ))}
            </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(SpaceOutreach);
