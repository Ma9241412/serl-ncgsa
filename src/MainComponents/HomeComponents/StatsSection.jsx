import React from "react";
import { Row, Col, Typography, Card } from "antd";
import {
  TeamOutlined,
  BankOutlined,
  GlobalOutlined,
  TrophyOutlined,
  EyeOutlined,
} from "@ant-design/icons";

import "../../Styles/Home.css";
const { Title } = Typography;
const stats = [
  {
    number: 200000,
    suffix: "+",
    label: "Students Engaged",
    icon: TeamOutlined,
    color: "#FFFFFF",
  },
  {
    number: 100,
    suffix: "+",
    label: "Universities Collaboration",
    icon: BankOutlined,
    color: "#FFFFFF",
  },
  {
    number: 30,
    suffix: "+",
    label: "International Participation",
    icon: GlobalOutlined,
    color: "#FFFFFF",
  },
  {
    number: 1500,
    suffix: "+",
    label: "Schools & Colleges Participation",
    icon: TrophyOutlined,
    color: "#FFFFFF",
  },
  {
    number: 2,
    suffix: "M+",
    label: "Media Impression",
    icon: EyeOutlined,
    color: "#FFFFFF",
  },
];

const StatsSection = () => (
    <Row
      className="stats-cont"
      gutter={[24, 24]}
      justify="center"
      align="middle"
    >
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            lg={4}
            xl={4}
            className={`stats-item-col`}
          >
            <Card bordered={false} className="stats-card">
              <div className="stats-icon">
                <IconComponent />
              </div>
              <Title level={2} className="stats-count-title">
                <span className="stats-count">
                  <span className="stats-count-number">{stat.number.toLocaleString()}</span>
                  <span className="stats-count-suffix">{stat.suffix}</span>
                </span>
              </Title>
              <Title level={5} className="stats-label-title">
                {stat.label}
              </Title>
            </Card>
          </Col>
        );
      })}
    </Row>
);

export default StatsSection;
