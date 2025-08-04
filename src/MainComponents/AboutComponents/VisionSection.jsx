import React from 'react';
import { Row, Col, Typography, Grid, Carousel } from 'antd';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const carouselRef = React.useRef(null);

  // Images from assets folder
  const images = [
    {
      src: require('../../assets/images/slider1.png'),
      alt: 'Space Research Background'
    },
    {
      src: require('../../assets/images/slider2.png'),
      alt: 'Space Education Main'
    },
    {
      src: require('../../assets/images/slider3.png'),
      alt: 'SERL Organization'
    }
  ];

  return (
    <div style={{ 
      backgroundColor: 'transparent',
      padding: isMobile ? '10px 20px' : '20px 40px',
      position: 'relative'
    }}>
      {/* Starry background effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px, 150px 150px, 200px 200px',
        pointerEvents: 'none'
      }} />  
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Row 1: Text Content */}
        <Row justify="start" style={{ marginBottom: '60px' }}>
          <Col xs={24} lg={23} style={{ textAlign: 'left', paddingLeft: isMobile ? '10px' : '40px' }}>
            <Title 
              level={2}
              style={{ 
                color: '#FFFFFF',
                fontSize: isMobile ? '2.2rem' : '2.8rem',
                fontWeight: 'bold',
                marginBottom: '10px'
              }}
            >
              Vision
            </Title>
            {/* Thin orange line under title */}
            <div style={{
              width: '1318px',
              height: '2px',
              backgroundColor: '#FF9500',
              marginBottom: '20px'
            }} />
            <Paragraph 
              style={{ 
                color: '#D1D5DB',
                fontSize: isMobile ? '1.1rem' : '1.2rem',
                lineHeight: '1.7',
                marginBottom: '30px',
                textAlign: 'justify'
              }}
            >
              In pursuit of achieving   United Nations Sustainable Development Goals (SDGs) through   space technology, particularly focusing on their relevance to developing countries,  our dedicated team of researchers embarked on a pioneering endeavor to establish Space Education Research Lab   (SERL) in 2020 at a public university, the Institute   of Space Technology at Islamabad, Pakistan.    SERL envisions to foster space awareness,   education, and outreach    across schools,  colleges, and    universities, building a resilien     pipeline of talent for the growing space ecosystem. With a commitment to expanding the frontiers of space knowledge, SERL actively drives the dissemination of space education though space-related festivities to raise   awareness about space technology and its applications   among the broader
            </Paragraph>
          </Col>
        </Row>

        {/* Row 2: Continuous Sliding Images Carousel */}
 <Row justify="start">
<Col 
  xs={24} 
  lg={24} 
  style={{ 
    paddingLeft: isMobile ? '10px' : '40px', 
    paddingRight: isMobile ? '10px' : '40px' 
  }}
>
 <div style={{ paddingRight: isMobile ? '0px' : '0px' }}>
      <div style={{ position: 'relative' }}>
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
            <div key={index} style={{ padding: '0 24px' }}> {/* Increased gap from 16px to 24px */}
              <div style={{
                height: '250px',
                borderRadius: '0px', // Non-curved rectangle
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                background: 'rgba(255, 255, 255, 0.05)', // Transparent background
                margin: '0 8px' // Additional margin for more separation
              }}>
                <img 
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.parentElement.style.transform = 'translateY(-5px)';
                    e.target.parentElement.style.boxShadow = '0 12px 32px rgba(0,0,0,0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.parentElement.style.transform = 'translateY(0)';
                    e.target.parentElement.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
                  }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </Col>
</Row>

      </div>
    </div>
  );
};

export default SpaceOutreach;