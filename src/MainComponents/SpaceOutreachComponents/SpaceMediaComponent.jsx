import React from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import SpaceFilmFestival from './SpaceMedia/SpaceFilmFestival';
import JahanAurBhiHain from './SpaceMedia/JahanAurBhiHain';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title, Paragraph } = Typography;

const SpaceMediaComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  // Use props instead of internal state
  const currentEvent = selectedEvent || 'space-film-festival';
  const eventButtons = availableEvents || ['space-film-festival', 'jahan-aur-bhi-hain'];

  const eventTitles = {
    'space-film-festival': 'Space Film Festival',
    'jahan-aur-bhi-hain': 'Jahan Aur Bhi Hain'
  };

  const renderEventComponent = () => {
    switch (currentEvent) {
      case 'space-film-festival':
        return <SpaceFilmFestival />;
      case 'jahan-aur-bhi-hain':
        return <JahanAurBhiHain />;
      default:
        return <SpaceFilmFestival />;
    }
  };

  return (
    <>
      {/* Space Media Main Section */}
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
                    Space Media
                  </Title>
                  <div style={{
                    width: '1400px',
                    height: '2px',
                    backgroundColor: 'white',
                    marginBottom: '24px'
                  }}></div>
                  <Paragraph style={{ fontSize: '18px', color: '#cccccc', marginBottom: '24px' }}>
                    SERL produces and promotes space-themed media content including documentaries, films, and educational programs that showcase Pakistan's space achievements and inspire public interest in space science and exploration.
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
                          minWidth: '160px',
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

export default SpaceMediaComponent;
