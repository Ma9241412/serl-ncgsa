import React from 'react';
import { Row, Col, Typography, Grid } from 'antd';
import Layout from './components/layouts/layout';

const { Title } = Typography;
const { useBreakpoint } = Grid;

const HomeContent = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#111827',
      padding: isMobile ? '40px 20px' : '80px 40px'
    }}>
      <Row gutter={[32, 32]} justify="center" align="middle" style={{ minHeight: '80vh' }}>
        <Col xs={24} lg={12}>
          <Title level={1} style={{ 
            color: '#60A5FA',
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: 'bold',
            textAlign: isMobile ? 'center' : 'left',
            marginBottom: '20px'
          }}>
            SPACE
          </Title>
          <Title level={2} style={{ 
            color: '#F97316',
            fontSize: isMobile ? '1.5rem' : '2rem',
            textAlign: isMobile ? 'center' : 'left',
            marginBottom: '10px'
          }}>
            EDUCATION | AWARENESS | OUTREACH
          </Title>
          <Title level={3} style={{ 
            color: '#E5E7EB',
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            textAlign: isMobile ? 'center' : 'left',
            fontWeight: 'normal'
          }}>
            RESEARCH | INNOVATION | DISCOVERY
          </Title>
        </Col>
        
        <Col xs={24} lg={12}>
          <Title level={1} style={{ 
            color: '#F97316',
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: 'bold',
            textAlign: isMobile ? 'center' : 'right',
            marginBottom: '20px'
          }}>
            SERL
          </Title>
          <Title level={2} style={{ 
            color: '#60A5FA',
            fontSize: isMobile ? '1.5rem' : '2rem',
            textAlign: isMobile ? 'center' : 'right',
            marginBottom: '10px'
          }}>
            SPACE EDUCATION RESEARCH LAB
          </Title>
          <Title level={3} style={{ 
            color: '#E5E7EB',
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            textAlign: isMobile ? 'center' : 'right',
            fontWeight: 'normal'
          }}>
            ADVANCING SPACE SCIENCE EDUCATION
          </Title>
        </Col>
      </Row>
    </div>
  );
};

const App = () => {
  return (
    <Layout activeNavItem="HOME">
      <HomeContent />
    </Layout>
  );
};

export default App;