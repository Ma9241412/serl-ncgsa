
import React from "react";
import { Row, Col, Typography, Button, Card, Space, Grid } from "antd";
import mainbg from "../../assets/images/mainbg.jpg";
import "../../Styles/Home.css";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const HeroSection = () => {
  const isMobile = !Grid.useBreakpoint().lg;
  return (
    <Card
      bodyStyle={{ padding: 0 }}
      className="hero-bg-card"
      bordered={false}
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        className="hero-row"
        gutter={[24, 24]}
      >
        <Col xs={24} lg={12}>
          <Space direction="vertical" size={isMobile ? 12 : 24} style={{ width: "100%" }}>
            <Title level={3} className={`hero-title-main ${isMobile ? "hero-title-center" : "hero-title-left"}`}>
              Space Education Research Lab
            </Title>
            <Title level={isMobile ? 2 : 1} className={`hero-title-space ${isMobile ? "hero-title-center" : "hero-title-left"}`}>
              SPACE
            </Title>
            <Paragraph strong className={`hero-paragraph-highlight ${isMobile ? "hero-title-center" : "hero-title-left"}`}>
              EDUCATION | AWARENESS | OUTREACH
            </Paragraph>
            <Paragraph className={`hero-paragraph-desc ${isMobile ? "hero-title-center" : "hero-title-left"}`}>
              Inspiring Space Innovation Through STEM Learning
            </Paragraph>
          </Space>
        </Col>
        <Col xs={24} lg={12}>
          <Space direction="vertical" size={isMobile ? 12 : 24} style={{ width: "100%", alignItems: "center", justifyContent: "center", display: "flex" }}>
            <Card className="hero-desc-card" bodyStyle={{ padding: 20 }} bordered={false}>
              <Paragraph className="hero-desc-paragraph">
                Space Education Research Lab (SERL), is one of the labs of National Center Of GIS & Space Applications (NCGSA) that primarily focuses to develop innovative and sustainable interactive learning methods and strategies for space science and technology awareness, education and popularization.
              </Paragraph>
            </Card>
            <Button type="default" size="large" className={`hero-readmore-btn ${isMobile ? "hero-btn-center" : "hero-btn-left"}`}>
              Read More
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default HeroSection;
