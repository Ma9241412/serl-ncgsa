import React from "react";
import { Row, Col, Typography, Card } from "antd";
import {
  TeamOutlined,
  BankOutlined,
  GlobalOutlined,
  TrophyOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import CountUp from "react-countup";

const { Title } = Typography;

const stats = [
  { number: 200, suffix: "k+", label: "Students Engaged", icon: <TeamOutlined /> },
  { number: 100, suffix: "+", label: "Universities Collaboration", icon: <BankOutlined /> },
  { number: 30, suffix: "+", label: "International Participation", icon: <GlobalOutlined /> },
  { number: 1500, suffix: "+", label: "Schools & Colleges Participation", icon: <TrophyOutlined /> },
  { number: 2, suffix: "M+", label: "Media Impression", icon: <EyeOutlined /> },
];

const StatsSection = () => (
  <div style={{ padding: "0x 20px" }}>
    {/* Add gutter here for spacing */}
    <Row gutter={[32, 32]} justify="center">
      {stats.map((stat, index) => (
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={4}
          xl={4}
        >
          <Card
            bordered={false}
            
            style={{
              background: "#1a1a1a",
              borderRadius: "16px",
              width:"200px",
              height: "210px",
              textAlign: "center",
              border: "2px solid #ff9500",
              transition: "all 0.3s ease",
              cursor: "pointer",
              color: "#fff",
            }}
            hoverable
          >
            <div
              style={{
                fontSize: "2.5rem",
                color: "#ff9500",
                marginBottom: "10px",
              }}
            >
              {stat.icon}
            </div>
            <Title
              level={2}
              style={{
                color: "#fff",
                margin: 0,
                fontWeight: "700",
                fontSize: "2rem",
              }}
            >
              <CountUp
                start={0}
                end={stat.number}
                duration={2.5}
                separator=","
              />
              <span
                style={{ color: "#ff9500", marginLeft: "4px" }}
              >
                {stat.suffix}
              </span>
            </Title>
            <Title
              level={5}
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.85)",
                marginTop: "10px",
                marginBottom: 0,
              }}
            >
              {stat.label}
            </Title>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default StatsSection
