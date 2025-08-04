import React from 'react';
import { Row, Col, Typography, Grid } from 'antd';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  // Mission objectives data with image icons
  const missionCards = [
    {
      icon: <img src={require('../../assets/images/mission1.png')} alt="Awareness & Engagement" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />,
      title: 'Awareness &',
      subtitle: 'Engagement'
    },
    {
      icon: <img src={require('../../assets/images/mission2.png')} alt="Educator Empowerment" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />,
      title: 'Educator',
      subtitle: 'Empowerment'
    },
    {
      icon: <img src={require('../../assets/images/mission3.png')} alt="Curriculum Enhancement" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />,
      title: 'Curriculum',
      subtitle: 'Enhancement'
    },
    {
      icon: <img src={require('../../assets/images/mission4.png')} alt="STEM/STEAM Enrichment" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />,
      title: 'STEM/STEAM',
      subtitle: 'Enrichment'
    },
    {
      icon: <img src={require('../../assets/images/mission5.png')} alt="Media Outreach" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />,
      title: 'Media',
      subtitle: 'Outreach'
    }
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
              Mission
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
             To develop innovative and sustainable interactive learning methods and strategies for Space Science and Technology awareness, education and popularization by unification of scientific and pedagogical methodologies especially for the school, college & university students and for early career researchers & academicians. The five major objectives are mentioned below:
             </Paragraph>
          </Col>
        </Row>

        {/* Row 2: Mission Objective Cards */}
        <Row 
          gutter={0} 
          justify="space-between" 
          style={{ 
            paddingLeft: isMobile ? '10px' : '40px',
           paddingRight: isMobile ? '10px' : '0px', // ✅ minimum allowed
           marginRight: isMobile ? '0px' : '-300px', // ✅ to shift it outward

            margin: '0',
            width: isMobile ? 'auto' : '1318px', // Match the orange line width
            display: 'flex'
          }}
        >
          {missionCards.map((card, index) => (
            <div
              key={index}
              style={{
                width: isMobile ? '100%' : 'calc((100% - 64px) / 5)', // 64px total gap for 4 spaces between 5 cards
                marginRight: index < 4 ? (isMobile ? '0' : '16px') : '0', // No margin on last card
                marginBottom: isMobile ? '16px' : '0'
              }}
            >
              <div
                style={{
                  backgroundColor: '#1E1E1E',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: '220px',
                  width: '100%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                }}
              >
                {/* Orange Top Section with Icon */}
                <div 
                  style={{
                    backgroundColor: '#FF9500',
                    height: '140px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {card.icon}
                </div>
                
                {/* Dark Bottom Section with Text */}
                <div 
                  style={{
                    backgroundColor: '#1E1E1E',
                    height: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px'
                  }}
                >
                  <Typography.Text 
                    style={{ 
                      color: '#FFFFFF', 
                      fontSize: isMobile ? '1rem' : '1.1rem',
                      fontWeight: '500',
                      lineHeight: '1.2',
                      textAlign: 'center',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    {card.title}
                  </Typography.Text>
                  <Typography.Text 
                    style={{ 
                      color: '#FFFFFF', 
                      fontSize: isMobile ? '1rem' : '1.1rem',
                      fontWeight: '500',
                      lineHeight: '1.2',
                      textAlign: 'center',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    {card.subtitle}
                  </Typography.Text>
                </div>
              </div>
            </div>
          ))}
        </Row>

      </div>
    </div>
  );
};

export default SpaceOutreach;