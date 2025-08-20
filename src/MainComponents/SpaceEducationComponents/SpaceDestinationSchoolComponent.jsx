import React, { useState } from 'react';
import { Typography, Row, Col, Button, Card, Space } from 'antd';
import STEAMSummerCampatKalam from './SpaceDestinationSchool/STEAMSummerCampatKalam';
import STEAMSummerCampatBaraGali from './SpaceDestinationSchool/STEAMSummerCampatBaraGali';
import CadetCollegeHasanabdal from './SpaceDestinationSchool/CadetCollegeHasanabdal';
import SpaceRendezvous from './SpaceDestinationSchool/SpaceRendezvous';
import FazaiaInterCollege from './SpaceDestinationSchool/FazaiaInterCollege';
import '../../Styles/SpaceEducation.css';

const { Title, Paragraph } = Typography;

const SpaceDestinationSchool = () => {
  const [selectedYear, setSelectedYear] = useState('STEAMSummerCampatKalam');
  const eventButtons = [
    'STEAMSummerCampatKalam',
    'STEAMSummerCampatBaraGali',
    'CadetCollegeHasanabdal',
    'SpaceRendezvous',
    'FazaiaInterCollege'
  ];

  const eventTitles = {
    'STEAMSummerCampatKalam': 'STEAM Summer Camp at Kalam',
    'STEAMSummerCampatBaraGali': 'STEAM Summer Camp at Bara Gali',
    'CadetCollegeHasanabdal': 'Cadet College Hasanabdal',
    'SpaceRendezvous': 'Space Rendezvous',
    'FazaiaInterCollege': 'Fazaia Inter College'
  };

  const renderEventComponent = () => {
    switch (selectedYear) {
      case 'STEAMSummerCampatKalam':
        return <STEAMSummerCampatKalam />;
      case 'STEAMSummerCampatBaraGali':
        return <STEAMSummerCampatBaraGali />;
      case 'CadetCollegeHasanabdal':
        return <CadetCollegeHasanabdal />;
      case 'SpaceRendezvous':
        return <SpaceRendezvous />;
      case 'FazaiaInterCollege':
        return <FazaiaInterCollege />;
      default:
        return <STEAMSummerCampatKalam />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Space Destination School</Title>
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

export default React.memo(SpaceDestinationSchool);
