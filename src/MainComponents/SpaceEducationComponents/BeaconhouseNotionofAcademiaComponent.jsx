import React, { useState } from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import BNA2024 from './BeaconhouseNotionofAcademia/BNA2024';
import BNA2025 from './BeaconhouseNotionofAcademia/BNA2025';
import '../../Styles/SpaceEducation.css';

const { Title, Paragraph } = Typography;

const BeaconHouseNotionofAcademia = () => {
  const [selectedYear, setSelectedYear] = useState('BNA2024');
  const eventButtons = [
    'BNA2024',
    'BNA2025',
  ];

  const eventTitles = {
    'BNA2024': 'Beaconhouse Notion of Academia 2024',
    'BNA2025': 'Beaconhouse Notion of Academia 2025',
  };

  const renderEventComponent = () => {
    switch (selectedYear) {
      case 'BNA2024':
        return <BNA2024 />;
      case 'BNA2025':
        return <BNA2025 />;
      default:
        return <BNA2024 />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Beacon House Notion of Academia</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                SERL's Space Destination School programs promote astronomical education and public engagement through the International Astronomy Olympiad and specialized solar observation sessions designed to inspire the next generation of astronomers.
              </Paragraph>
              <Space size="small" wrap>
                {eventButtons.map((event) => (
                  <Button
                    key={event}
                    size="large"
                    className={selectedYear === event ? 'spo-btn spo-btn-active' : 'spo-btn spo-btn-inactive'}
                    onClick={() => setSelectedYear(event)}
                  >
                    {eventTitles[event]}
                  </Button>
                ))}
              </Space>
            </div>
            {renderEventComponent()}
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(BeaconHouseNotionofAcademia);
