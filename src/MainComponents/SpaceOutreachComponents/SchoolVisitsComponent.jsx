import React from 'react';
import { Typography, Card, Select, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SpaceDebrisHeadstart from './SchoolVisits/SpaceDebrisHeadstart';
import GCULahore from './SchoolVisits/GCULahore';
import InventixSummit from './SchoolVisits/InventixSummit';
import '../../Styles/SchoolVisits.css';

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
    <div className="sv-bg">
      <div className="sv-inner">
        <Row justify="center">
          <Col xs={24} lg={20} xl={18}>
            <Title level={1} className="sv-title">School Visits</Title>
            <div className="sv-select-wrap">
              <Select
                value={selectedEvent}
                onChange={onEventChange}
                className="sv-select"
                size="large"
                suffixIcon={<DownOutlined className="sv-select-icon" />}
                dropdownClassName="sv-dropdown"
              >
                {availableEvents.map(event => (
                  <Option key={event} value={event}>
                    <span className="sv-option-text">{eventTitles[event]}</span>
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

export default React.memo(SchoolVisitsComponent);
