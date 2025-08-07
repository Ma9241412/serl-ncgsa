import React from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import WorldSpaceWeek2020 from './WorldSpaceWeek/WorldSpaceWeek2020';
import WorldSpaceWeek2021 from './WorldSpaceWeek/WorldSpaceWeek2021';
import WorldSpaceWeek2022 from './WorldSpaceWeek/WorldSpaceWeek2022';
import WorldSpaceWeek2023 from './WorldSpaceWeek/WorldSpaceWeek2023';
import WorldSpaceWeek2024 from './WorldSpaceWeek/WorldSpaceWeek2024';
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title, Paragraph } = Typography;

const WorldSpaceWeekComponents = ({ selectedYear, availableYears, onYearChange }) => {
  // Use props instead of internal state
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
    <>
      {/* World Space Week Main Section */}
      <section style={{ 
        padding: '20px 0 0 0', // remove bottom padding from section
        backgroundImage: `url(${homemainbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '500px' // reduce height to remove empty space
      }}>
        <Row justify="center">
          <Col xs={24} lg={24} xl={24}>
            <Card
              style={{ 
                backgroundColor: 'transparent', 
                borderRadius: '30px', 
                border: '2px solid #FF9500',
                // width: '100%', maxWidth: '1200px' is the standard for all events and navigation bar width in Space Outreach section
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                marginBottom: 0,
                paddingBottom: 0
              }}
              bodyStyle={{ 
                padding: '40px 40px 0 40px', // no bottom padding
                backgroundColor: 'transparent',
                borderRadius: '30px'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {/* Header */}
                <div style={{ textAlign: 'left', paddingBottom: '20px' }}>
                  <Title level={1} style={{ marginBottom: '16px', color: 'white' }}>
                    World Space Week
                  </Title>
                  <div style={{
                    width: '100%',
                    maxWidth: '1200px',
                    height: '2px',
                    backgroundColor: 'white',
                    marginBottom: '24px'
                  }}></div>
                  <Paragraph style={{ fontSize: '18px', color: '#cccccc', marginBottom: '24px' }}>
                    Annual Celebration Of Space Science And Technology Contributions To Improving Human Conditions. World Space Week Is An International 
                    Celebration Of Science And Technology, And Their Contribution To The Betterment Of The Human Condition.
                  </Paragraph>
                  
                  {/* Year Navigation */}
                  <Space size="small">
                    {yearButtons.map((year) => (
                      <Button
                        key={year}
                        size="large"
                        type={currentYear === year ? 'primary' : 'default'}
                        style={{
                          backgroundColor: currentYear === year ? '#ff8c00' : '#333333',
                          borderColor: currentYear === year ? '#ff8c00' : '#555555',
                          color: currentYear === year ? 'white' : '#cccccc',
                          minWidth: '80px',
                          height: '40px'
                        }}
                        onClick={() => onYearChange && onYearChange(year)}
                      >
                        {year}
                      </Button>
                    ))}
                  </Space>
                </div>

                {/* Dynamic Year Content */}
                {renderYearComponent()}
              </Space>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default WorldSpaceWeekComponents;
