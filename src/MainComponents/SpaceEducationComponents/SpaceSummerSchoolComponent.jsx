import React, { useState } from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import SSS2021 from './SpaceSummerSchool/SSS2021';
import SSS2022 from './SpaceSummerSchool/SSS2022';
import SSS2024 from './SpaceSummerSchool/SSS2024';
import '../../Styles/SpaceEducation.css';
const { Title, Paragraph } = Typography;

const SpaceSummerSchool = () => {
  const [selectedYear, setSelectedYear] = useState('SSS2021');
  const eventButtons = [
    'SSS2021',
    'SSS2022',
    'SSS2024'
  ];

  const eventTitles = {
    'SSS2021': 'Space Summer School 2021',
    'SSS2022': 'Space Summer School 2022',
    'SSS2024': 'Space Summer School 2024'
  };

  const renderEventComponent = () => {
    switch (selectedYear) {
      case 'SSS2021':
        return <SSS2021 />;
      case 'SSS2022':
        return <SSS2022 />;
      case 'SSS2024':
        return <SSS2024 />;
      default:
        return <SSS2021 />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Space Summer School</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                SERL's Space Summer School programs promote astronomical education and public engagement through the International Astronomy Olympiad and specialized solar observation sessions designed to inspire the next generation of astronomers.
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

export default React.memo(SpaceSummerSchool);
