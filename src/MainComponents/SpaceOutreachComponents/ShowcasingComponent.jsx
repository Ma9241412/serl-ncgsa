import React from 'react';
import { Typography, Row, Col, Button, Card, Space } from 'antd';
import ICE2025 from './Showcasing/ICE2025';
import Beaconhouse from './Showcasing/Beaconhouse';
import VCForum2023 from './Showcasing/VCForum2023';
import APTEX2025 from './Showcasing/APTEX2025';
import '../../Styles/SpaceOutreach.css';

const { Title } = Typography;

const ShowcasingComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const eventTitles = {
    'ice2025': 'ICE 2025',
    'beaconhouse': 'Beaconhouse Exhibition',
    'vc-forum-2023': 'VC Forum 2023',
    'aptex2025': 'APTEX 2025'
  };

  const renderSelectedEvent = () => {
    switch (selectedEvent) {
      case 'ice2025':
        return <ICE2025 />;
      case 'beaconhouse':
        return <Beaconhouse />;
      case 'vc-forum-2023':
        return <VCForum2023 />;
      case 'aptex2025':
        return <APTEX2025 />;
      default:
        return <ICE2025 />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space" style={{ width: '100%' }}>
            <div className="spo-header">
              <Title level={1} className="spo-title">Showcasing</Title>
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

export default React.memo(ShowcasingComponent);
