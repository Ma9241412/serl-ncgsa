import React from 'react';
import { Row, Col, Typography, Grid } from 'antd';

const { Title } = Typography;
const { useBreakpoint } = Grid;

const StatsSection = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const stats = [
    { number: '200,000', label: 'Students Reached' },
    { number: '150+', label: 'Institutions' },
    { number: '50', label: 'Programs' },
    { number: '1500', label: 'Workshops' },
    { number: '204', label: 'Publications' }
  ];

  return (
    <div style={{ 
      backgroundColor: '#111827',
      padding: isMobile ? '60px 20px' : '80px 40px'
    }}>
      <Row 
        gutter={[32, 32]} 
        justify="center" 
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        {stats.map((stat, index) => (
          <Col 
            key={index}
            xs={12} 
            sm={8} 
            md={4}
            style={{ textAlign: 'center' }}
          >
            <Title 
              level={2}
              style={{ 
                color: '#FCD34D',
                fontSize: isMobile ? '2rem' : '3rem',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}
            >
              {stat.number}
            </Title>
            <Title 
              level={4}
              style={{ 
                color: '#D1D5DB',
                fontSize: isMobile ? '0.9rem' : '1.1rem',
                fontWeight: 'normal',
                margin: 0
              }}
            >
              {stat.label}
            </Title>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StatsSection;
