import React from 'react';
import { Typography, Card, Select, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SpaceForum2020 from './Forum/SpaceForum2020';
import SpaceForum2021 from './Forum/SpaceForum2021';
import CareersInSpaceForum from './Forum/CareersInSpaceForum';
import STEPForum from './Forum/STEPForum';
import Forum360STEM from './Forum/Forum360STEM';
import SpaceForum2022 from './Forum/SpaceForum2022';
import '../../Styles/Forum.css';

const { Title } = Typography;
const { Option } = Select;

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
    <div className="forum-bg">
      <div className="forum-header-wrap">
        <Row justify="center">
          <Col xs={24} lg={24} xl={23}>
            <Card bordered={false} className="forum-header-card">
              <Title level={2} className="forum-title">Forum</Title>
              <div className="forum-underline"></div>
              <Select
                value={selectedEvent}
                onChange={onEventChange}
                className="forum-select"
                size="large"
                placeholder="Select Program"
                suffixIcon={<DownOutlined className="forum-select-icon" />}
              >
                {availableEvents.map(event => (
                  <Option key={event} value={event}>
                    {eventTitles[event]}
                  </Option>
                ))}
              </Select>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="forum-content-bg">
        {selectedEvent && renderSelectedEvent()}
      </div>
    </div>
  );
};

export default React.memo(ForumComponent);
