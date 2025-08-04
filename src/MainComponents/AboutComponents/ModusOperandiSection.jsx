import React from 'react';
import { Row, Col, Typography, Grid } from 'antd';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <>
      {/* CSS Animation Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      
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
              Modus Operandi
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
              At SERL, we operate through a structured and dynamic approach that integrates hands-on engagement, interdisciplinary content, and real-world applications to cultivate curiosity and competence in space sciences.
            </Paragraph>
          </Col>
        </Row>

        {/* Row 2: Dynamic Content Cards */}
        <Row gutter={[0, 48]} style={{ paddingLeft: isMobile ? '10px' : '40px', paddingRight: isMobile ? '10px' : '40px' }}>
          {/* Card 1: Project-Based Learning */}
          <Col xs={24} lg={24}>
            <div style={{
              backgroundColor: '#131212ff',
              borderRadius: '16px',
              padding: isMobile ? '25px' : '35px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              gap: isMobile ? '25px' : '45px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              opacity: 0,
              transform: 'translateY(30px)',
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
            }}>
              {/* Text Content */}
              <div style={{ flex: 1 }}>
                <Title 
                  level={3}
                  style={{ 
                    color: '#FFFFFF',
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    lineHeight: '1.2'
                  }}
                >
                  Emphasizing Project-Based Learning and Innovation
                </Title>
                <Paragraph 
                  style={{ 
                    color: '#D1D5DB',
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    lineHeight: '1.6',
                    marginBottom: '0',
                    textAlign: 'left'
                  }}
                >
                  Workshops and trainings challenge participants to apply scientific principles, design thinking, and teamwork to create functional space-related models and prototypes.
                </Paragraph>
              </div>
              {/* Image */}
              <div style={{ 
                flexShrink: 0,
                width: isMobile ? '100%' : '400px',
                height: isMobile ? '250px' : '250px'
              }}>
                <img 
                  src={require('../../assets/images/modus1.png')}
                  alt="Project-Based Learning"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
            </div>
          </Col>

          {/* Card 2: Culture of Curiosity */}
          <Col xs={24} lg={24}>
            <div style={{
          backgroundColor: '#131212ff',
              borderRadius: '16px',
              padding: isMobile ? '25px' : '35px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              gap: isMobile ? '25px' : '45px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              opacity: 0,
              transform: 'translateY(30px)',
              animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
            }}>
              {/* Text Content */}
              <div style={{ flex: 1 }}>
                <Title 
                  level={3}
                  style={{ 
                    color: '#FFFFFF',
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    lineHeight: '1.2'
                  }}
                >
                  Fostering a Culture of Curiosity, Collaboration, and Exploration
                </Title>
                <Title 
                  level={4}
                  style={{ 
                    color: '#ffffffff',
                    fontSize: isMobile ? '1.4rem' : '1.6rem',
                    fontWeight: '600',
                    marginBottom: '20px',
                    lineHeight: '1.2'
                  }}
                >
                  Empowering Educators Through Capacity Building
                </Title>
                <Paragraph 
                  style={{ 
                    color: '#D1D5DB',
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    lineHeight: '1.6',
                    marginBottom: '0',
                    textAlign: 'left'
                  }}
                >
                  Across all initiatives, we encourage participants to ask questions, work collaboratively, and connect space science with broader societal issues, environmental concerns, and global sustainability goals.
                </Paragraph>
              </div>
              {/* Image */}
              <div style={{ 
                flexShrink: 0,
                width: isMobile ? '100%' : '400px',
                height: isMobile ? '250px' : '250px'
              }}>
                <img 
                  src={require('../../assets/images/modus2.png')}
                  alt="Culture of Curiosity"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* View All Button */}
        <Row justify="end" style={{ marginTop: '40px', paddingRight: isMobile ? '10px' : '40px' }}>
          <div style={{
            color: '#FF9500',
            fontSize: '1.1rem',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out 1s forwards'
          }}>
            View all
            <span style={{ fontSize: '1.2rem' }}>▼</span>
          </div>
        </Row>

        </div>
      </div>
    </>
  );
};

export default SpaceOutreach;