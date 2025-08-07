import React from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import LahoreScienceMela from './SpaceFestivals/LahoreScienceMela';
import STEAMMela from './SpaceFestivals/STEAMMela';
import SpaceExpo from './SpaceFestivals/SpaceExpo';
import PakistanLearningFestival from './SpaceFestivals/PakistanLearningFestival';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title, Paragraph } = Typography;

const SpaceFestivalsComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  // Use props instead of internal state
  const currentEvent = selectedEvent || 'lahore-science-mela';
  const eventButtons = availableEvents || ['lahore-science-mela', 'steam-mela', 'space-expo', 'pakistan-learning-festival'];

  const eventTitles = {
    'lahore-science-mela': 'Lahore Science Mela',
    'steam-mela': 'STEAM Mela',
    'space-expo': 'Space Expo',
    'pakistan-learning-festival': 'Pakistan Learning Festival'
  };

  const renderEventComponent = () => {
    switch (currentEvent) {
      case 'lahore-science-mela':
        return <LahoreScienceMela />;
      case 'steam-mela':
        return <STEAMMela />;
      case 'space-expo':
        return <SpaceExpo />;
      case 'pakistan-learning-festival':
        return <PakistanLearningFestival />;
      default:
        return <LahoreScienceMela />;
    }
  };

  return (
    <>
      {/* Space Festivals Main Section */}
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
                    Space Festivals
                  </Title>
                  <div style={{
                    width: '1400px',
                    height: '2px',
                    backgroundColor: 'white',
                    marginBottom: '24px'
                  }}></div>
                  <Paragraph style={{ fontSize: '18px', color: '#cccccc', marginBottom: '24px' }}>
                    SERL organizes and participates in various space festivals and educational events across Pakistan, promoting space science education and inspiring the next generation of space scientists and engineers.
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
                          minWidth: '140px',
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

export default SpaceFestivalsComponent;
