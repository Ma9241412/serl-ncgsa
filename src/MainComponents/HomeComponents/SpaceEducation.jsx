import React from 'react';
import { Row, Col, Typography, Grid, Card } from 'antd';
import Button from '../../components/ui/button';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceEducation = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  const images = [
    '/placeholder-image-5.jpg',
    '/placeholder-image-6.jpg',
    '/placeholder-image-7.jpg',
    '/placeholder-image-8.jpg'
  ];

  return (
    <div style={{ 
      backgroundColor: '#111827',
      padding: isMobile ? '60px 20px' : '100px 40px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12} order={isMobile ? 2 : 1}>
            <Row gutter={[16, 16]}>
              {images.map((img, index) => (
                <Col key={index} xs={12} sm={12}>
                  <Card
                    hoverable
                    cover={
                      <div style={{ 
                        height: '200px', 
                        backgroundColor: '#374151',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9CA3AF'
                      }}>
                        Education Image {index + 1}
                      </div>
                    }
                    style={{ 
                      backgroundColor: '#1F2937',
                      border: 'none'
                    }}
                    bodyStyle={{ padding: '12px' }}
                  >
                    <Paragraph 
                      style={{ 
                        color: '#D1D5DB', 
                        margin: 0, 
                        fontSize: '0.9rem' 
                      }}
                    >
                      Educational Program {index + 1}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          
          <Col xs={24} lg={12} order={isMobile ? 1 : 2}>
            <Title 
              level={2}
              style={{ 
                color: '#FCD34D',
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                textAlign: isMobile ? 'center' : 'left'
              }}
            >
              Space <span style={{ color: '#60A5FA' }}>Education</span>
            </Title>
            <Paragraph 
              style={{ 
                color: '#D1D5DB',
                fontSize: isMobile ? '1rem' : '1.1rem',
                lineHeight: '1.7',
                marginBottom: '30px',
                textAlign: isMobile ? 'center' : 'left'
              }}
            >
              Our comprehensive Space Education programs are designed to cultivate the next 
              generation of space scientists, engineers, and explorers. Through hands-on 
              learning experiences, advanced curriculum development, and innovative teaching 
              methodologies, we provide students and educators with the tools they need to 
              excel in space science fields. From elementary concepts to advanced research 
              techniques, our educational initiatives span all academic levels.
            </Paragraph>
            <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
              <Button 
                variant="primary" 
                size="large"
                style={{ 
                  backgroundColor: '#60A5FA',
                  borderColor: '#60A5FA'
                }}
              >
                Explore Programs
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SpaceEducation;
