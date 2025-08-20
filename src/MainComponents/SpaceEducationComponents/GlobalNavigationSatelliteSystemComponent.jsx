import React, { useState } from 'react';
import { Typography, Row, Col, Button, Card, Space } from 'antd';
import SchoolonFundamentalsofGNSS from './GlobalNavigationSatelliteSystem/SchoolonFundamentalsofGNSS';
import SchoolonGNSSSpaceWeather from './GlobalNavigationSatelliteSystem/SchoolonGNSSSpaceWeather';
import FindingthePath from './GlobalNavigationSatelliteSystem/FindingthePath';
import TechnicalSessionofRTKLIB from './GlobalNavigationSatelliteSystem/TechnicalSessionofRTKLIB';
import TechnicalSessiononSpaceWeather from './GlobalNavigationSatelliteSystem/TechnicalSessiononSpaceWeather';
import WorkshoponGoogleEarth from './GlobalNavigationSatelliteSystem/WorkshoponGoogleEarth';
import WorkshoponGNSSDataandSignalPreprocessing from './GlobalNavigationSatelliteSystem/WorkshoponGNSSDataandSignalPreprocessing';
import '../../Styles/SpaceEducation.css';

const { Title, Paragraph } = Typography;

const GlobalNavigationSatelliteSystemComponent = () => {
  const [selectedYear, setSelectedYear] = useState('SchoolonFundamentalsofGNSS');
  const eventButtons = [
    'SchoolonFundamentalsofGNSS',
    'SchoolonGNSSSpaceWeather',
    'FindingthePath',
    'TechnicalSessionofRTKLIB',
    'TechnicalSessiononSpaceWeather',
    'WorkshoponGoogleEarth',
    'WorkshoponGNSSDataandSignalPreprocessing',
  ];

  const eventTitles = {
    'SchoolonFundamentalsofGNSS': 'School on Fundamentals of GNSS',
    'SchoolonGNSSSpaceWeather': 'School on GNSS Space Weather',
    'FindingthePath': 'Finding the Path',
    'TechnicalSessionofRTKLIB': 'Technical Session of RTKLIB',
    'TechnicalSessiononSpaceWeather': 'Technical Session on Space Weather',
    'WorkshoponGoogleEarth': 'Workshop on Google Earth',
    'WorkshoponGNSSDataandSignalPreprocessing': 'Workshop on GNSS Data and Signal Preprocessing',
  };

  const renderEventComponent = () => {
    switch (selectedYear) {
      case 'SchoolonFundamentalsofGNSS':
        return <SchoolonFundamentalsofGNSS />;
      case 'SchoolonGNSSSpaceWeather':
        return <SchoolonGNSSSpaceWeather />;
      case 'FindingthePath':
        return <FindingthePath />;
      case 'TechnicalSessionofRTKLIB':
        return <TechnicalSessionofRTKLIB />;
      case 'TechnicalSessiononSpaceWeather':
        return <TechnicalSessiononSpaceWeather />;
      case 'WorkshoponGoogleEarth':
        return <WorkshoponGoogleEarth />;
      case 'WorkshoponGNSSDataandSignalPreprocessing':
        return <WorkshoponGNSSDataandSignalPreprocessing />;
      default:
        return <WorkshoponFundamentalsofGNSS />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Global Navigation Satellite System</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                SERL's Global Navigation Satellite System promote astronomical education and public engagement through the International Astronomy Olympiad and specialized solar observation sessions designed to inspire the next generation of astronomers.
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

export default React.memo(GlobalNavigationSatelliteSystemComponent);

