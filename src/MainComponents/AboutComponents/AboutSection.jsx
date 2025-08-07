import React from "react";
import { Row, Col, Typography, Space } from "antd";
import '../../Styles/About.css';

const HeroSection = () => {
  const { Title } = Typography;
  return (
    <Row className="about-bg" align="middle" justify="center" style={{ minHeight: '80vh', margin: 0 }}>
      <Col xs={24} md={20} lg={16} xl={12} style={{ width: '100%' }}>
        <Space direction="vertical" align="center" style={{ width: '100%' }}>
          <Title className="about-title">ABOUT</Title>
        </Space>
      </Col>
    </Row>
  );
};

export default HeroSection;
