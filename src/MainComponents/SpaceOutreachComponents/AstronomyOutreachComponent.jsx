import React from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import IAO from './AstronomyOutreach/IAO';
import SolarTelescopyVisits from './AstronomyOutreach/SolarTelescopyVisits';
import '../../Styles/SpaceOutreach.css';

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
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Astronomy Outreach</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                SERL's Astronomy Outreach programs promote astronomical education and public engagement through the International Astronomy Olympiad and specialized solar observation sessions designed to inspire the next generation of astronomers.
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

export default React.memo(AstronomyOutreachComponent);
