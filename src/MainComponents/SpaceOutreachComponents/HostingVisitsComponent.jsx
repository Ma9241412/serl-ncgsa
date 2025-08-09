import React from 'react';
import { Typography, Card, Select, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import LtGenMohsinQureshi from './HostingVisits/LtGenMohsinQureshi';
import ProfAhsanIqbal from './HostingVisits/ProfAhsanIqbal';
import HEC from './HostingVisits/HEC';
import PakChinaResearchCenter from './HostingVisits/PakChinaResearchCenter';
import NASTP from './HostingVisits/NASTP';
import '../../Styles/HostingVisits.css';

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
    <div className="hv-bg">
      <div className="hv-header-wrap">
        <Row justify="center">
          <Col xs={24} lg={24} xl={23}>
            <Card bordered={false} className="hv-header-card">
              <Title level={2} className="hv-title">Hosting Visits</Title>
              <div className="hv-underline"></div>
              <div className="hv-select-wrap">
                <Select
                  value={selectedEvent}
                  onChange={onEventChange}
                  className="hv-select"
                  size="large"
                  suffixIcon={<DownOutlined className="hv-select-icon" />}
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

      <div className="hv-content-wrap">
        {renderSelectedEvent()}
      </div>
    </div>
  );
};

export default React.memo(HostingVisitsComponent);
