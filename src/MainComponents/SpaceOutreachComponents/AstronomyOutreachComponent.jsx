import React from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import IAO from './AstronomyOutreach/IAO';
import SolarTelescopyVisits from './AstronomyOutreach/SolarTelescopyVisits';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title, Paragraph } = Typography;

const AstronomyOutreachComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const currentEvent = selectedEvent || 'iao';
  const eventButtons = availableEvents || ['iao', 'solar-telescopy-visits'];

  const eventTitles = {
    'iao': 'IAO',
    'solar-telescopy-visits': 'Solar Telescopy Visits'
  };

  const renderEventComponent = () => {
    switch (currentEvent) {
      case 'iao':
        return <IAO />;
      case 'solar-telescopy-visits':
        return <SolarTelescopyVisits />;
      default:
        return <IAO />;
    }
  };

  return (
    <>
      {/* Astronomy Outreach Main Section */}
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
                    Astronomy Outreach
                  </Title>
                  <div style={{
                    width: '1400px',
                    height: '2px',
                    backgroundColor: 'white',
                    marginBottom: '24px'
                  }}></div>
                  <Paragraph style={{ fontSize: '18px', color: '#cccccc', marginBottom: '24px' }}>
                    SERL's Astronomy Outreach programs promote astronomical education and public engagement through the International Astronomy Olympiad and specialized solar observation sessions designed to inspire the next generation of astronomers.
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

export default AstronomyOutreachComponent;
