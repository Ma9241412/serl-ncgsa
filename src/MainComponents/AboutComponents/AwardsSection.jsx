import React from 'react';
import { Row, Col, Typography, Grid } from 'antd';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  // Award images from assets folder
  const awards = [
    { src: require('../../assets/images/award1.png'), alt: 'Award 1' },
    { src: require('../../assets/images/award2.png'), alt: 'Award 2' },
    { src: require('../../assets/images/award3.png'), alt: 'Award 3' },
    { src: require('../../assets/images/award4.png'), alt: 'Award 4' },
    { src: require('../../assets/images/award5.png'), alt: 'Award 5' },
    { src: require('../../assets/images/award6.png'), alt: 'Award 6' },
    { src: require('../../assets/images/award7.png'), alt: 'Award 7' },
    { src: require('../../assets/images/award8.png'), alt: 'Award 8' },
    { src: require('../../assets/images/award9.png'), alt: 'Award 9' },
    { src: require('../../assets/images/award10.png'), alt: 'Award 10' }
  ];

  return (
    <div style={{ 
      backgroundColor: 'transparent',
      padding: isMobile ? '20px 30px' : '40px 80px',
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
              Awards & Honors
            </Title>
            {/* Thin orange line under title */}
            <div style={{
              width: '1318px',
              height: '2px',
              backgroundColor: '#FF9500',
              marginBottom: '20px'
            }} />
          </Col>
        </Row>

        {/* Row 2: Awards Grid - 2 Rows of 5 Curved White Rectangles */}
        <Row 
          gutter={0} 
          justify="space-between" 
          style={{ 
            paddingLeft: isMobile ? '10px' : '40px',
            paddingRight: isMobile ? '10px' : '40px',
            margin: '0',
            width: isMobile ? 'auto' : '1318px', // Match the orange line width
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {awards.map((award, index) => (
<div
  key={index}
  style={{
    width: isMobile ? '100%' : '20%',
    marginBottom: isMobile ? '6px' : '6px', // Slight spacing between rows
    display: 'flex',
    justifyContent: 'center'
  }}
>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '5px',
                  width: '100%',
                  maxWidth: '180px',
                  height: '180px', // Made height equal to maxWidth for square shape
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                }}
              >
                <img 
                  src={award.src}
                  alt={award.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          ))}
        </Row>

      </div>
    </div>
  );
};

export default SpaceOutreach;