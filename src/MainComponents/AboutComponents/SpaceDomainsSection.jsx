import React from 'react';
import { Row, Col, Typography, Grid } from 'antd';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  // Domain images and labels
  const domains = [
    {
      src: require('../../assets/images/domain1.png'),
      label: 'Astronomy & Astrophysics',
      alt: 'Astronomy & Astrophysics Domain'
    },
    {
      src: require('../../assets/images/domain2.png'),
      label: 'Aviation',
      alt: 'Aviation Domain'
    },
    {
      src: require('../../assets/images/domain3.png'),
      label: 'Earth & ATMOSPHERE',
      alt: 'Earth & Atmosphere Domain'
    },
    {
      src: require('../../assets/images/domain4.png'),
      label: 'Rocketry',
      alt: 'Rocketry Domain'
    },
    {
      src: require('../../assets/images/domain5.png'),
      label: 'Satellite Technology',
      alt: 'Satellite Technology Domain'
    }
  ];

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
              Space Domains
            </Title>
          </Col>
        </Row>

        {/* Row 2: Domain Images in One Row */}
        <Row 
          gutter={0} 
          justify="space-between" 
          style={{ 
            paddingLeft: isMobile ? '10px' : '40px',
            paddingRight: isMobile ? '10px' : '40px',
            margin: '0',
            width: '100%',
            display: 'flex'
          }}
        >
          {domains.map((domain, index) => (
            <div
              key={index}
              style={{
                width: isMobile ? '100%' : 'calc((100% - 64px) / 5)', // 64px total gap for 4 spaces between 5 domains
                marginRight: index < 4 ? (isMobile ? '0' : '16px') : '0', // No margin on last domain
                marginBottom: isMobile ? '24px' : '0',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  background: 'transparent',
                  borderRadius: '0px',
                  overflow: 'visible',
                  height: '200px',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img 
                  src={domain.src}
                  alt={domain.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    background: 'transparent'
                  }}
                />
              </div>
              
              {/* Domain Label */}
              <Typography.Text 
                style={{ 
                  color: '#FFFFFF', 
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: '500',
                  lineHeight: '1.3',
                  textAlign: 'center',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  display: 'block'
                }}
              >
                {domain.label}
              </Typography.Text>
            </div>
          ))}
        </Row>

      </div>
    </div>
  );
};

export default SpaceOutreach;