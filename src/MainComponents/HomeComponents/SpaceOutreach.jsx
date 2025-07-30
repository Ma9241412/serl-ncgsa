import React from 'react';
import { Row, Col, Typography, Grid, Card } from 'antd';
import Button from '../../components/ui/button';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  const images = [
    '/placeholder-image-1.jpg',
    '/placeholder-image-2.jpg',
    '/placeholder-image-3.jpg',
    '/placeholder-image-4.jpg'
  ];

  return (
    <div style={{ 
      backgroundColor: '#0B0F1A',
      padding: isMobile ? '60px 20px' : '100px 40px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <Title 
              level={2}
              style={{ 
                color: '#FCD34D',
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}
            >
              Space <span style={{ color: '#F97316' }}>Outreach</span>
            </Title>
            <Paragraph 
              style={{ 
                color: '#D1D5DB',
                fontSize: isMobile ? '1rem' : '1.1rem',
                lineHeight: '1.7',
                marginBottom: '30px'
              }}
            >
              Our Space Outreach program connects with communities across the region to promote 
              space science awareness and education. Through interactive workshops, seminars, 
              and public engagement events, we inspire curiosity about the cosmos and encourage 
              participation in space-related fields. From school visits to community science 
              fairs, we're committed to making space science accessible to everyone, regardless 
              of their background or location.
            </Paragraph>
            <Button 
              variant="primary" 
              size="large"
              style={{ 
                backgroundColor: '#F97316',
                borderColor: '#F97316'
              }}
            >
              Learn More
            </Button>
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
                        Outreach Image {index + 1}
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
                      Community Workshop {index + 1}
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

export default SpaceOutreach;
