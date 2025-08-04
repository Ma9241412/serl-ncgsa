import React from 'react';
import { Row, Col, Typography, Grid } from 'antd';
import contributionImg from '../../assets/images/contribution.png';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
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
        {/* Two Column Layout: Text Left, Image Right */}
        <Row justify="space-between" align="top" gutter={[32, 32]}>
          {/* Left Column - Text Content */}
          <Col xs={24} lg={12} style={{ paddingLeft: isMobile ? '10px' : '40px' }}>
            <Title 
              level={2}
              style={{ 
                color: '#FFFFFF',
                fontSize: isMobile ? '2.2rem' : '2.8rem',
                fontWeight: 'bold',
                marginBottom: '10px'
              }}
            >
              Contribution
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
              In pursuit of achieving United Nations Sustainable Development Goals (SDGs) through space technology, particularly focusing on their relevance to developing countries, our dedicated team of researchers embarked on a pioneering endeavor to establish Space Education Research Lab (SERL) in 2020 at a public university, the Institute of Space Technology at Islamabad, Pakistan. SERL envisions to foster space awareness, education, and outreach across schools, colleges, and universities, building a resilient pipeline of talent for the growing space ecosystem. With a commitment to expanding the frontiers of space knowledge, SERL actively drives the dissemination of space education through space-related festivities to raise awareness about space technology and its applications among the broader community.
            </Paragraph>
          </Col>

          {/* Right Column - Contribution Image in White Curved Box */}
          <Col xs={24} lg={11} style={{ paddingRight: isMobile ? '10px' : '40px' }}>
            {/* Add top margin to align with paragraph start */}
            <div style={{ marginTop: isMobile ? '0px' : '130px' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '15px', // Less padding to give more space for image
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '460px', // Slightly bigger width
                minHeight: '340px', // Slightly bigger height
                margin: '0 auto' // Center the container
              }}>
                <img 
                  src={contributionImg}
                  alt="SERL Contribution Framework"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '430px', // Much bigger max width for image
                    borderRadius: '10px'
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SpaceOutreach;