import React from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import LahoreScienceMela from './SpaceFestivals/LahoreScienceMela';
import STEAMMela from './SpaceFestivals/STEAMMela';
import SpaceExpo from './SpaceFestivals/SpaceExpo';
import PakistanLearningFestival from './SpaceFestivals/PakistanLearningFestival';
import '../../Styles/SpaceOutreach.css';

const { Title, Paragraph } = Typography;

const SpaceFestivalsComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
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
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Space Festivals</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                SERL organizes and participates in various space festivals and educational events across Pakistan, promoting space science education and inspiring the next generation of space scientists and engineers.
              </Paragraph>
              <Space size="small" wrap>
                {eventButtons.map((event) => (
                  <Button
                    key={event}
                    size="large"
                    className={currentEvent === event ? 'spo-btn spo-btn-active' : 'spo-btn spo-btn-inactive'}
                    onClick={() => onEventChange && onEventChange(event)}
                  >
                    {eventTitles[event]}
                  </Button>
                ))}
              </Space>
            </div>
            {renderEventComponent()}
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(SpaceFestivalsComponent);
