import React, { useState } from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import NationalCanSatCompetition from './CanSatDesignandDevelopment/NationalCanSatCompetition';
import SpaceMakerCamp from './CanSatDesignandDevelopment/SpaceMakerCamp';
import STEMx from './CanSatDesignandDevelopment/STEMx';
import Wobotics from './CanSatDesignandDevelopment/Wobotics';
import WorkshoponCanSat from './CanSatDesignandDevelopment/WorkshoponCanSat';
import '../../Styles/SpaceEducation.css';

const { Title, Paragraph } = Typography;

const CanSatDesignandDevelopmentComponent = () => {
  const [selectedYear, setSelectedYear] = useState('NationalCanSatCompetition');
  const eventButtons = [
    'NationalCanSatCompetition',
    'SpaceMakerCamp',
    'STEMx',
    'Wobotics',
    'WorkshoponCanSat'
  ];

  const eventTitles = {
    'NationalCanSatCompetition': 'National CanSat Competition',
    'SpaceMakerCamp': 'Space Maker Camp',
    'STEMx': 'STEMx',
    'Wobotics': 'Wobotics',
    'WorkshoponCanSat': 'Workshop on CanSat'
  };

  const renderEventComponent = () => {
    switch (selectedYear) {
      case 'NationalCanSatCompetition':
        return <NationalCanSatCompetition />;
      case 'SpaceMakerCamp':
        return <SpaceMakerCamp />;
      case 'STEMx':
        return <STEMx />;
      case 'Wobotics':
        return <Wobotics />;
      case 'WorkshoponCanSat':
        return <WorkshoponCanSat />;
      default:
        return <NationalCanSatCompetition />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">CanSat Design and Development</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                SERL's CanSat Design and Development promote astronomical education and public engagement through the International Astronomy Olympiad and specialized solar observation sessions designed to inspire the next generation of astronomers.
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

export default React.memo(CanSatDesignandDevelopmentComponent);