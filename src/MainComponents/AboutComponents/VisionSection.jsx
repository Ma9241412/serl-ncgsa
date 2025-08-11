import React from 'react';
import Slider from 'react-slick';
import { Row, Col, Typography, Grid, Image } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Styles/About.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  const images = [
    { src: require('../../assets/images/slider1.png'), alt: 'Space Research Background' },
    { src: require('../../assets/images/slider2.png'), alt: 'Space Education Main' },
    { src: require('../../assets/images/slider3.png'), alt: 'SERL Organization' }
  ];

  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    centerMode: true,
    centerPadding: '0px'
  };

  return (
    <div className="about-vision-wrapper">
      <Row justify="center">
        <Col xs={24} lg={24}>
          <Title level={2} className="about-vision-title">Vision</Title>
          <div className="section-underline" />
          <Paragraph className="about-vision-paragraph">
            In pursuit of achieving United Nations Sustainable Development Goals (SDGs) through space technology, particularly focusing on their relevance to developing countries, our dedicated team of researchers embarked on a pioneering endeavor to establish Space Education Research Lab (SERL) in 2020 at a public university, the Institute of Space Technology at Islamabad, Pakistan. SERL envisions to foster space awareness, education, and outreach across schools, colleges, and universities, building a resilient pipeline of talent for the growing space ecosystem. With a commitment to expanding the frontiers of space knowledge, SERL actively drives the dissemination of space education through space-related festivities to raise awareness about space technology and its applications among the broader community.
          </Paragraph>
        </Col>

        <Col xs={24} lg={24}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="about-vision-slide">
                <Image
                  preview={false}
                  src={image.src}
                  alt={image.alt}
                  className="about-vision-slide-img"
                />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(SpaceOutreach);
