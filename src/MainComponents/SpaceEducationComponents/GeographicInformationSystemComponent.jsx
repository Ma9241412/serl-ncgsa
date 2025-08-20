import React, { useState } from 'react';
import { Typography, Row, Col, Button, Card, Space } from 'antd';
import WorkshopRSGIS from './GeographicInformationSystem/WorkshopRSGIS';
import SummerSchoolonRSGIS from './GeographicInformationSystem/SummerSchoolonRSGIS';
import NaionalGISSummit from './GeographicInformationSystem/NaionalGISSummit';
import GeoHackathon from './GeographicInformationSystem/GeoHackathon';
import '../../Styles/SpaceEducation.css';

const { Title, Paragraph } = Typography;

const GeographicInformationSystemComponent = () => {
  const [selectedYear, setSelectedYear] = useState('WorkshopRSGIS');
  const eventButtons = [
    'WorkshopRSGIS',
    'SummerSchoolonRSGIS',
    'NaionalGISSummit',
    'GeoHackathon',
  ];

  const eventTitles = {
    'WorkshopRSGIS': 'Workshop on RSGIS',
    'SummerSchoolonRSGIS': 'Summer School on RSGIS',
    'NaionalGISSummit': 'National GIS Summit',
    'GeoHackathon': 'Geo Hackathon',
  };

  const renderEventComponent = () => {
    switch (selectedYear) {
      case 'WorkshopRSGIS':
        return <WorkshopRSGIS />;
      case 'SummerSchoolonRSGIS':
        return <SummerSchoolonRSGIS />;
      case 'NaionalGISSummit':
        return <NaionalGISSummit />;
      case 'GeoHackathon':
        return <GeoHackathon />;
      default:
        return <WorkshopRSGIS />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Geographical Information System</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                SERL's Geographical Information System promote astronomical education and public engagement through the International Astronomy Olympiad and specialized solar observation sessions designed to inspire the next generation of astronomers.
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

export default React.memo(GeographicInformationSystemComponent);
