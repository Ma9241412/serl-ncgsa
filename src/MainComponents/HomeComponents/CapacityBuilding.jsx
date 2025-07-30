import React from 'react';
import { Row, Col, Typography, Grid, Card } from 'antd';
import Button from '../../components/ui/button';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const CapacityBuilding = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  const images = [
    '/placeholder-image-9.jpg',
    '/placeholder-image-10.jpg',
    '/placeholder-image-11.jpg',
    '/placeholder-image-12.jpg'
  ];

  return (
    <div style={{ 
      backgroundColor: '#1F2937',
      padding: isMobile ? '60px 20px' : '100px 40px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <Title 
              level={2}
              style={{ 
                color: '#10B981',
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                textAlign: isMobile ? 'center' : 'left'
              }}
            >
              Capacity <span style={{ color: '#F59E0B' }}>Building</span>
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
              Our Capacity Building initiatives focus on strengthening institutional 
              capabilities and human resources in space science and technology. We provide 
              comprehensive training programs, workshops, and certification courses designed 
              to enhance technical skills, research capabilities, and project management 
              expertise. Through partnerships with international organizations and industry 
              leaders, we ensure our programs meet global standards and best practices.
            </Paragraph>
            <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
              <Button 
                variant="primary" 
                size="large"
                style={{ 
                  backgroundColor: '#10B981',
                  borderColor: '#10B981'
                }}
              >
                Join Programs
              </Button>
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
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
                        Training {index + 1}
                      </div>
                    }
                    style={{ 
                      backgroundColor: '#111827',
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
                      Training Program {index + 1}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CapacityBuilding;
