import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { 
  TeamOutlined, 
  BankOutlined, 
  GlobalOutlined, 
  TrophyOutlined, 
  EyeOutlined 
} from '@ant-design/icons';
import '../../Styles/CapacityBuilding.css';
import CountUp from 'react-countup';

const { Title } = Typography;

const stats = [
  { number: 15, suffix: '+', label: 'Programs', icon: TeamOutlined, color: '#FFFFFF' },
  { number: 2000, suffix: '+', label: 'Students', icon: BankOutlined, color: '#FFFFFF' },
  { number: 8, suffix: '+', label: 'Experience', icon: GlobalOutlined, color: '#FFFFFF' },
  { number: 15, suffix: '+', label: 'Workshops', icon: TrophyOutlined, color: '#FFFFFF' },
  { number: 15, suffix: '+', label: 'Programs', icon: EyeOutlined, color: '#FFFFFF' }
];

const StatsSection = () => {
  return (
    <div className='standard-layout'>
      <Row gutter={[32, 32]} justify="center">
        {stats.map((stat, index) => (
          <Col
            key={index}
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
                width: "200px",
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
                {/* ✅ Render icon as JSX */}
                <stat.icon />
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
                <span style={{ color: "#ff9500", marginLeft: "4px" }}>
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
};

export default StatsSection;
