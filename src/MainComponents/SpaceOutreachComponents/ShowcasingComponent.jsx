import React from 'react';
import { Typography, Card, Select, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ICE2025 from './Showcasing/ICE2025';
import Beaconhouse from './Showcasing/Beaconhouse';
import VCForum2023 from './Showcasing/VCForum2023';
import APTEX2025 from './Showcasing/APTEX2025';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title } = Typography;
const { Option } = Select;

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
            background: rgba(0, 0, 0, 0.9) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid #FF9500 !important;
          }
          .ant-select-item {
            color: #cccccc !important;
            background: transparent !important;
          }
          .ant-select-item:hover {
            background: rgba(255, 149, 0, 0.2) !important;
            color: #ff8c00 !important;
          }
          .ant-select-item-option-selected {
            background: rgba(255, 149, 0, 0.3) !important;
            color: #ff8c00 !important;
          }
        `}
      </style>
      <div style={{ padding: '100px 0 60px' }}>
        <Row justify="center">
          <Col xs={24} lg={20} xl={18}>
            <Title level={1} style={{ 
              color: 'white', 
              textAlign: 'center', 
              marginBottom: '60px',
              fontSize: '48px',
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              Showcasing
            </Title>
            
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <Select
                value={selectedEvent}
                onChange={onEventChange}
                style={{ 
                  width: '400px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: '10px'
                }}
                size="large"
                suffixIcon={<DownOutlined style={{ color: '#ff8c00' }} />}
                dropdownClassName="custom-dropdown"
              >
                {availableEvents.map(event => (
                  <Option key={event} value={event}>
                    <span style={{ color: '#cccccc' }}>
                      {eventTitles[event]}
                    </span>
                  </Option>
                ))}
              </Select>
            </div>
            
            {renderSelectedEvent()}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ShowcasingComponent;
