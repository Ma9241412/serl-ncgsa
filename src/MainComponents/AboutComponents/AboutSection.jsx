import React from "react";
import { Row, Col, Typography, Space } from "antd";
import '../../Styles/About.css';

const HeroSection = () => {
  const { Title } = Typography;
  return (
    <Row className="about-bg" align="middle" justify="center" >
          <Title className="main-title">ABOUT</Title>
    </Row>
  );
};

export default HeroSection;
