import React from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import SpaceFilmFestival from './SpaceMedia/SpaceFilmFestival';
import JahanAurBhiHain from './SpaceMedia/JahanAurBhiHain';
import '../../Styles/SpaceOutreach.css';

const { Title, Paragraph } = Typography;

const SpaceMediaComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const currentEvent = selectedEvent || 'space-film-festival';
  const eventButtons = availableEvents || ['space-film-festival', 'jahan-aur-bhi-hain'];

  const eventTitles = {
    'space-film-festival': 'Space Film Festival',
    'jahan-aur-bhi-hain': 'Jahan Aur Bhi Hain'
  };

  const renderEventComponent = () => {
    switch (currentEvent) {
      case 'space-film-festival':
        return <SpaceFilmFestival />;
      case 'jahan-aur-bhi-hain':
        return <JahanAurBhiHain />;
      default:
        return <SpaceFilmFestival />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Space Media</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                SERL produces and promotes space-themed media content including documentaries, films, and educational programs that showcase Pakistan's space achievements and inspire public interest in space science and exploration.
              </Paragraph>
              <Space size="small" wrap>
                {eventButtons.map((event) => (
                  <Button
                    key={event}
                    size="large"
                    className={currentEvent === event ? 'spo-btn spo-btn-active' : 'spo-btn spo-btn-inactive'}
                    onClick={() => onEventChange && onEventChange(event)}
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

export default React.memo(SpaceMediaComponent);
