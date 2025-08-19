import React from 'react';
import { Typography, Row, Col, Button, Card, Space } from 'antd';
import SpaceForum2020 from './Forum/SpaceForum2020';
import SpaceForum2021 from './Forum/SpaceForum2021';
import CareersInSpaceForum from './Forum/CareersInSpaceForum';
import STEPForum from './Forum/STEPForum';
import Forum360STEM from './Forum/Forum360STEM';
import SpaceForum2022 from './Forum/SpaceForum2022';
import '../../Styles/SpaceOutreach.css';

const { Title } = Typography;

const ForumComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const eventTitles = {
    'space-forum-2020': 'Space Forum 2020',
    'space-forum-2021': 'Space Forum 2021',
    'careers-in-space-forum': 'Careers in Space Forum',
    'step-forum': 'STEP Forum',
    'forum-360-stem': 'Forum 360 STEM',
    'space-forum-2022': 'Space Forum 2022'
  };

  const renderSelectedEvent = () => {
    switch (selectedEvent) {
      case 'space-forum-2020':
        return <SpaceForum2020 />;
      case 'space-forum-2021':
        return <SpaceForum2021 />;
      case 'careers-in-space-forum':
        return <CareersInSpaceForum />;
      case 'step-forum':
        return <STEPForum />;
      case 'forum-360-stem':
        return <Forum360STEM />;
      case 'space-forum-2022':
        return <SpaceForum2022 />;
      default:
        return <SpaceForum2020 />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space" style={{ width: '100%' }}>
            <div className="spo-header">
              <Title level={1} className="spo-title">Forum</Title>
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

export default React.memo(ForumComponent);
