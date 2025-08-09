import React from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import HumanSpaceFlightFJWU from './LincolnsCorner/HumanSpaceFlightFJWU';
import HumanSpaceFlightNLP from './LincolnsCorner/HumanSpaceFlightNLP';
import WomenInSpaceFJWU_old from './LincolnsCorner/WomenInSpaceFJWU_old';
import WrightBrothersDayFJWU_new from './LincolnsCorner/WrightBrothersDayFJWU_new';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title, Paragraph } = Typography;

const LincolnsCornerComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  // Use props instead of internal state
  const currentEvent = selectedEvent || 'human-spaceflight-fjwu';
  const eventButtons = availableEvents || ['human-spaceflight-fjwu', 'human-spaceflight-nlp', 'women-in-space-fjwu', 'wright-brothers-day-fjwu'];

  const eventTitles = {
    'human-spaceflight-fjwu': 'Human Space Flight FJWU',
    'human-spaceflight-nlp': 'Human Space Flight NLP',
    'women-in-space-fjwu': 'Women in Space FJWU',
    'wright-brothers-day-fjwu': 'Wright Brothers Day FJWU'
  };

  const renderEventComponent = () => {
    switch (currentEvent) {
      case 'human-spaceflight-fjwu':
        return <HumanSpaceFlightFJWU />;
      case 'human-spaceflight-nlp':
        return <HumanSpaceFlightNLP />;
      case 'women-in-space-fjwu':
        return <WomenInSpaceFJWU_old />;
      case 'wright-brothers-day-fjwu':
        return <WrightBrothersDayFJWU_new />;
      default:
        return <HumanSpaceFlightFJWU />;
    }
  };

  return (
    <>
      {/* Lincoln's Corner Main Section */}
      <section style={{ 
        padding: '20px 0', 
        backgroundImage: `url(${homemainbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: 'auto'
      }}>
        <Row justify="center">
          <Col xs={24} lg={24} xl={24}>
            <Card
              style={{ 
                backgroundColor: 'transparent', 
                borderRadius: '30px', 
                border: '2px solid #FF9500',
                maxWidth: '3800px',
                width: '95%',
                margin: '0 auto'
              }}
              bodyStyle={{ 
                padding: '60px 40px', 
                backgroundColor: 'transparent',
                borderRadius: '30px'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {/* Header */}
                <div style={{ textAlign: 'left', paddingBottom: '20px' }}>
                  <Title level={1} style={{ marginBottom: '16px', color: 'white' }}>
                    Lincoln's Corner
                  </Title>
                  <div style={{
                    width: '1400px',
                    height: '2px',
                    backgroundColor: 'white',
                    marginBottom: '24px'
                  }}></div>
                  <Paragraph style={{ fontSize: '18px', color: '#cccccc', marginBottom: '24px' }}>
                    SERL's Lincoln's Corner celebrates the spirit of innovation and exploration through specialized programs focusing on human spaceflight, aviation history, and the pioneering achievements of women in space science and technology.
                  </Paragraph>
                  
                  {/* Event Navigation */}
                  <Space size="small" wrap>
                    {eventButtons.map((event) => (
                      <Button
                        key={event}
                        size="large"
                        type={currentEvent === event ? 'primary' : 'default'}
                        style={{
                          backgroundColor: currentEvent === event ? '#ff8c00' : '#333333',
                          borderColor: currentEvent === event ? '#ff8c00' : '#555555',
                          color: currentEvent === event ? 'white' : '#cccccc',
                          minWidth: '180px',
                          height: '40px'
                        }}
                        onClick={() => onEventChange && onEventChange(event)}
                      >
                        {eventTitles[event]}
                      </Button>
                    ))}
                  </Space>
                </div>

                {/* Dynamic Event Content */}
                {renderEventComponent()}
              </Space>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default LincolnsCornerComponent;
