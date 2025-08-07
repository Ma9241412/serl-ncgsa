import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title, Text } = Typography;

const SpaceBiblioRendezvousComponent = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundImage: `url(${homemainbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Header Section */}
      <div style={{ padding: '60px 0 20px', background: 'rgba(0, 0, 0, 0.7)' }}>
        <Row justify="center">
          <Col xs={24} lg={24} xl={23}>
            <Card
              style={{ 
                backgroundColor: 'transparent', 
                borderRadius: '20px', 
                border: '2px solid #FF9500',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              bodyStyle={{ 
                padding: '50px 80px', 
                backgroundColor: 'transparent',
                borderRadius: '20px'
              }}
            >
              <Title level={2} style={{ 
                color: 'white', 
                marginBottom: '8px',
                fontSize: '36px',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                Space Biblio Rendezvous
              </Title>
              <div style={{
                width: '120px',
                height: '4px',
                backgroundColor: '#ff8c00',
                margin: '0 auto 32px'
              }}></div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Main Content */}
      <div style={{ padding: '40px 0', background: 'rgba(0, 0, 0, 0.5)' }}>
        <Row justify="center">
          <Col xs={24} lg={20} xl={18}>
            <Card
              style={{ 
                backgroundColor: 'transparent', 
                borderRadius: '20px', 
                border: '2px solid #FF9500',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              bodyStyle={{ 
                padding: '60px 80px', 
                backgroundColor: 'transparent',
                borderRadius: '20px'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <Text style={{ 
                  color: '#cccccc', 
                  fontSize: '18px',
                  lineHeight: '1.8',
                  display: 'block',
                  marginBottom: '20px'
                }}>
                  Space Biblio Rendezvous is SERL's comprehensive initiative to bridge the gap between space science literature and practical education, creating a dynamic platform for knowledge exchange and academic discourse.
                </Text>
                
                <Text style={{ 
                  color: '#cccccc', 
                  fontSize: '16px',
                  lineHeight: '1.6',
                  display: 'block'
                }}>
                  This program encompasses literature reviews, research discussions, academic collaborations, and the dissemination of cutting-edge space science knowledge through various educational channels.
                </Text>
              </div>

              {/* Program Features */}
              <div style={{ 
                backgroundColor: 'rgba(255, 149, 0, 0.1)', 
                borderRadius: '15px', 
                padding: '30px',
                border: '1px solid rgba(255, 149, 0, 0.3)'
              }}>
                <Title level={4} style={{ color: '#ff8c00', marginBottom: '20px', textAlign: 'center' }}>
                  Program Components
                </Title>
                <ul style={{ color: '#cccccc', fontSize: '16px', lineHeight: '1.8' }}>
                  <li>Space science literature reviews and analysis</li>
                  <li>Academic paper discussions and journal clubs</li>
                  <li>Research collaboration facilitation</li>
                  <li>Knowledge synthesis and dissemination</li>
                  <li>Expert-led bibliographic sessions</li>
                  <li>Educational resource development and curation</li>
                </ul>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SpaceBiblioRendezvousComponent;
