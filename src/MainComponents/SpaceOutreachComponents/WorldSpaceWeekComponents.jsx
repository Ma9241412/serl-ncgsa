import React from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import WorldSpaceWeek2020 from './WorldSpaceWeek/WorldSpaceWeek2020';
import WorldSpaceWeek2021 from './WorldSpaceWeek/WorldSpaceWeek2021';
import WorldSpaceWeek2022 from './WorldSpaceWeek/WorldSpaceWeek2022';
import WorldSpaceWeek2023 from './WorldSpaceWeek/WorldSpaceWeek2023';
import WorldSpaceWeek2024 from './WorldSpaceWeek/WorldSpaceWeek2024';
import '../../Styles/SpaceOutreach.css';

const { Title, Paragraph } = Typography;

const WorldSpaceWeekComponents = ({ selectedYear, availableYears, onYearChange }) => {
  const currentYear = selectedYear || '2020';
  const yearButtons = availableYears || ['2020', '2021', '2022', '2023', '2024'];

  const renderYearComponent = () => {
    switch (currentYear) {
      case '2020':
        return <WorldSpaceWeek2020 />;
      case '2021':
        return <WorldSpaceWeek2021 />;
      case '2022':
        return <WorldSpaceWeek2022 />;
      case '2023':
        return <WorldSpaceWeek2023 />;
      case '2024':
        return <WorldSpaceWeek2024 />;
      default:
        return <WorldSpaceWeek2020 />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">World Space Week</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                Annual Celebration Of Space Science And Technology Contributions To Improving Human Conditions. World Space Week Is An International
                Celebration Of Science And Technology, And Their Contribution To The Betterment Of The Human Condition.
              </Paragraph>
              <Space size="small">
                {yearButtons.map((year) => (
                  <Button
                    key={year}
                    size="large"
                    className={currentYear === year ? 'spo-btn spo-btn-active' : 'spo-btn spo-btn-inactive'}
                    onClick={() => onYearChange && onYearChange(year)}
                  >
                    {year}
                  </Button>
                ))}
              </Space>
            </div>
            {renderYearComponent()}
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(WorldSpaceWeekComponents);
