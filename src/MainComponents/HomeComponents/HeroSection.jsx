import React from 'react';
import { Row, Col, Typography, Grid } from 'antd';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const HeroSection = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <div style={{ backgroundColor: '#0B0F1A' }}>
      <Row
        justify="center"              
        align="middle"                 
        gutter={[24, 24]}
        style={{ minHeight: isMobile ? 'auto' : '60vh', padding: '40px 24px' }}
      >
        <Col
          xs={24}
          lg={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',      
            textAlign: 'center',       
          }}
        >
          <Title
            style={{
              color: '#FCD34D',
              fontSize: isMobile ? '3rem' : '5rem',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            SPACE
          </Title>

          <Title
            style={{
              color: '#F97316',
              fontSize: isMobile ? '1.3rem' : '1.8rem',
              marginBottom: '15px',
              fontWeight: '500',
            }}
          >
            EDUCATION | RESEARCH | AWARENESS
          </Title>

          <Paragraph
            style={{
              color: '#D1D5DB',
              fontSize: isMobile ? '1rem' : '1.2rem',
              marginBottom: '30px',
              lineHeight: '1.6',
            }}
          >
            Inspiring Space Innovation Through STEM Learning
          </Paragraph>
        </Col>

        <Col
          xs={24}
          lg={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',      // center content horizontally
            textAlign: 'center',       // center text
          }}
        >
          <Title
            level={1}
            style={{
              color: '#F97316',
              fontSize: isMobile ? '3rem' : '5rem',
              fontWeight: 'bold',
              marginBottom: '10px',
              lineHeight: '1.1',
            }}
          >
            SERL
          </Title>

          <Title
            level={2}
            style={{
              color: '#60A5FA',
              fontSize: isMobile ? '1.3rem' : '1.8rem',
              marginBottom: '15px',
              fontWeight: '500',
            }}
          >
            SPACE EDUCATION RESEARCH LAB
          </Title>

          <Paragraph
            style={{
              color: '#D1D5DB',
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: '1.6',
            }}
          >
            Discover the mysteries of the universe through cutting-edge research,
            explore frontiers of space technology, and join our mission to make
            space science accessible to everyone.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
