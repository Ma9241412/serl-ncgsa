import React from 'react';
import { Typography, Row, Col, Button, Card, Space } from 'antd';
import SpaceDebrisHeadstart from './SchoolVisits/SpaceDebrisHeadstart';
import GCULahore from './SchoolVisits/GCULahore';
import InventixSummit from './SchoolVisits/InventixSummit';
import '../../Styles/SpaceOutreach.css';

const { Title } = Typography;

const SchoolVisitsComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const eventTitles = {
    'space-debris-headstart': 'Space Debris Headstart',
    'gcu-lahore': 'GCU Lahore',
    'inventix-summit': 'Inventix Summit'
  };

  const renderSelectedEvent = () => {
    switch (selectedEvent) {
      case 'space-debris-headstart':
        return <SpaceDebrisHeadstart />;
      case 'gcu-lahore':
        return <GCULahore />;
      case 'inventix-summit':
        return <InventixSummit />;
      default:
        return <SpaceDebrisHeadstart />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space" style={{ width: '100%' }}>
            <div className="spo-header">
              <Title level={1} className="spo-title">School Visits</Title>
              <div className="spo-underline" />
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '16px', flexWrap: 'wrap', margin: '24px 0' }}>
                {availableEvents.map(event => (
                  <Button
                    key={event}
                    size="large"
                    className={selectedEvent === event ? 'spo-btn spo-btn-active' : 'spo-btn spo-btn-inactive'}
                    onClick={() => onEventChange(event)}
                  >
                    {eventTitles[event]}
                  </Button>
                ))}
              </div>
            </div>
            <div style={{ width: '100%' }}>
              {selectedEvent && renderSelectedEvent()}
            </div>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(SchoolVisitsComponent);
