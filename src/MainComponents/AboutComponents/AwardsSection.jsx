import React from 'react';
import { Row, Col, Typography, Grid, Divider } from 'antd';

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

  // Split awards into rows of 5
  const awardRows = [];
  for (let i = 0; i < awards.length; i += 5) {
    awardRows.push(awards.slice(i, i + 5));
  }

  return (
    <div style={{ 
      backgroundColor: 'transparent',
      padding: isMobile ? '15px 30px' : '30px 40px',
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
      
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
       <Divider style={{ borderColor: "#FF9500", borderWidth: "2px", width:"100%" }} />

          </Col>
        </Row>

        {/* Row 2: Awards Grid - 2 Rows of 5 Curved White Rectangles */}
   <div style={{ padding: '0 20px' }}>
  <Row gutter={[24, 24]} justify="center">
    {awards.map((award, idx) => (
      <Col xs={24} sm={12} md={8} lg={4} xl={4} key={idx}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            height: '180px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px'
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
      </Col>
    ))}
  </Row>
</div>



      </div>
    </div>
  );
};

export default SpaceOutreach;