import React from 'react';
import { Row, Col, Space, Typography, Card } from 'antd';
import SpaceBiblioRendezvous from './SpaceBiblioRendezvous/SpaceBiblioRendezvous';
import '../../Styles/SpaceEducation.css';

const { Title, Paragraph } = Typography;

const SpaceBiblioRendezvousComponent = () => {
  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Space Biblio Rendezvous</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                SERL's Space Destination School programs promote astronomical education and public engagement through the International Astronomy Olympiad and specialized solar observation sessions designed to inspire the next generation of astronomers.
              </Paragraph>
            </div>
            <SpaceBiblioRendezvous />
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default SpaceBiblioRendezvousComponent;
