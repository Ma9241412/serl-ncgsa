import React from 'react';
import { Typography, Card, Select, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SpaceDebrisHeadstart from './SchoolVisits/SpaceDebrisHeadstart';
import GCULahore from './SchoolVisits/GCULahore';
import InventixSummit from './SchoolVisits/InventixSummit';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title } = Typography;
const { Option } = Select;

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
              School Visits
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

export default SchoolVisitsComponent;
