import React from 'react';
import { Typography, Card, Select, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SpaceForum2020 from './Forum/SpaceForum2020';
import SpaceForum2021 from './Forum/SpaceForum2021';
import CareersInSpaceForum from './Forum/CareersInSpaceForum';
import STEPForum from './Forum/STEPForum';
import Forum360STEM from './Forum/Forum360STEM';
import SpaceForum2022 from './Forum/SpaceForum2022';
import homemainbg from '../../assets/images/homemainbg.jpg';

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
    <div style={{ 
      minHeight: '100vh',
      backgroundImage: `url(${homemainbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <style>
        {`
          .ant-select-dropdown {
            background-color: #1a1a1a !important;
            border: 1px solid #555 !important;
          }
          .ant-select-selector {
            background-color: #1a1a1a !important;
            border: 1px solid #555 !important;
            color: white !important;
          }
          .ant-select-selector:hover {
            border-color: #ff8c00 !important;
          }
          .ant-select-focused .ant-select-selector {
            border-color: #ff8c00 !important;
            box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.2) !important;
          }
          .ant-select-item-option {
            background-color: #1a1a1a !important;
            color: white !important;
          }
          .ant-select-item-option:hover {
            background-color: #333333 !important;
          }
          .ant-select-item-option-selected {
            background-color: #ff8c00 !important;
            color: white !important;
          }
          .ant-select-selection-item {
            color: white !important;
          }
        `}
      </style>

      <div style={{ padding: '60px 0 20px', background: 'rgba(0, 0, 0, 0.7)' }}>
        <Row justify="center">
          <Col xs={24} lg={24} xl={23}>
            <Card
              style={{ 
                backgroundColor: 'transparent', 
                borderRadius: '20px', 
                border: '2px solid #FF9500',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              bodyStyle={{ 
                padding: '50px 80px', 
                backgroundColor: 'transparent',
                borderRadius: '20px'
              }}
            >
              <Title level={2} style={{ 
                color: 'white', 
                marginBottom: '8px',
                fontSize: '36px',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                Forum
              </Title>
              <div style={{
                width: '120px',
                height: '4px',
                backgroundColor: '#ff8c00',
                margin: '0 auto 32px'
              }}></div>
              
              <Select
                value={selectedEvent}
                onChange={onEventChange}
                style={{ 
                  width: '100%',
                  height: '55px'
                }}
                size="large"
                placeholder="Select Program"
                suffixIcon={<DownOutlined style={{ color: '#ff8c00', fontSize: '16px' }} />}
                dropdownStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #555',
                  borderRadius: '8px'
                }}
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

      <div style={{ background: 'rgba(0, 0, 0, 0.5)', minHeight: 'auto' }}>
        {selectedEvent && renderSelectedEvent()}
      </div>
    </div>
  );
};

export default ForumComponent;
