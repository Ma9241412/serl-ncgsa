import React from 'react';
import { Typography, Card, Select, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import LtGenMohsinQureshi from './HostingVisits/LtGenMohsinQureshi';
import ProfAhsanIqbal from './HostingVisits/ProfAhsanIqbal';
import HEC from './HostingVisits/HEC';
import PakChinaResearchCenter from './HostingVisits/PakChinaResearchCenter';
import NASTP from './HostingVisits/NASTP';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title } = Typography;
const { Option } = Select;

const HostingVisitsComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const eventTitles = {
    'lt-gen-mohsin-qureshi': 'Lt Gen Mohsin Qureshi',
    'prof-ahsan-iqbal': 'Prof Ahsan Iqbal',
    'hec': 'HEC',
    'pak-china-research-center': 'Pak China Research Center',
    'nastp': 'NASTP'
  };

  const renderSelectedEvent = () => {
    switch (selectedEvent) {
      case 'lt-gen-mohsin-qureshi':
        return <LtGenMohsinQureshi />;
      case 'prof-ahsan-iqbal':
        return <ProfAhsanIqbal />;
      case 'hec':
        return <HEC />;
      case 'pak-china-research-center':
        return <PakChinaResearchCenter />;
      case 'nastp':
        return <NASTP />;
      default:
        return <LtGenMohsinQureshi />;
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
            background: rgba(255, 149, 0, 0.1) !important;
          }
          .ant-select-item-option-selected {
            background: rgba(255, 149, 0, 0.2) !important;
            color: #FF9500 !important;
          }
        `}
      </style>
      {/* Header Section */}
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
                Hosting Visits
              </Title>
              <div style={{
                width: '120px',
                height: '4px',
                backgroundColor: '#ff8c00',
                margin: '0 auto 32px'
              }}></div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                <Select
                  value={selectedEvent}
                  onChange={onEventChange}
                  style={{ 
                    width: '300px',
                    height: '50px'
                  }}
                  size="large"
                  suffixIcon={<DownOutlined style={{ color: '#FF9500', fontSize: '16px' }} />}
                  dropdownStyle={{
                    background: 'rgba(0, 0, 0, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid #FF9500'
                  }}
                >
                  {availableEvents.map(event => (
                    <Option key={event} value={event}>
                      {eventTitles[event]}
                    </Option>
                  ))}
                </Select>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Content Section */}
      <div style={{ padding: '0 0 60px', background: 'rgba(0, 0, 0, 0.7)' }}>
        {renderSelectedEvent()}
      </div>
    </div>
  );
};

export default HostingVisitsComponent;
