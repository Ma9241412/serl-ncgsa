import React from "react";
import { Layout, Row, Col, Typography, Space, Divider, Image } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
  SendOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import '../../Styles/Footer.css'
import logo from '../../assets/images/ncgsa-logo.png'

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const AppFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#0f0f0f",
        padding: "50px 20px",
        color: "#fff",

      }}
    >
    <div  style={{
    width: "100%",
    maxWidth: "1400px",
    backgroundColor: "#232121",
    borderRadius: "20px",
    margin: "0 auto",           // ✅ Centers horizontally
    padding: "20px"             // Optional, adds breathing room
  }}>
        <Row gutter={[32, 32]} justify="space-between">
        {/* Left Section */}
        <Col xs={24} md={10}>
          <Title level={4} style={{ color: "#fff", marginBottom: 10 }}>
            <span style={{ color: "#4da3ff" }}>Space </span>
            <span style={{ color: "#ff9500" }}>Education </span>
            <span style={{ color: "#4da3ff" }}>Research </span>
            <span style={{ color: "#fff" }}>Lab</span>
          </Title>
          <Text style={{ color: "#ccc" }}>
            A component of National Center of GIS and Space Applications for the Awareness,
            Education, Outreach and Popularization of Space Science, Technology & its Applications
          </Text>
          <div style={{ marginTop: 15 }}>
            <Space size="middle">
              <FacebookFilled style={{ fontSize: 20, color: "#fff" }} />
              <InstagramFilled style={{ fontSize: 20, color: "#fff" }} />
              <LinkedinFilled style={{ fontSize: 20, color: "#fff" }} />
            </Space>
          </div>
        </Col>

        {/* Contact Us */}
        <Col xs={24} sm={12} md={5}>
          <Title level={5} style={{ color: "#fff" }}>Contact Us</Title>
          <Text style={{ display: "block", color: "#ccc" }}>serl.ncgsa@gmail.com</Text>
          <Text style={{ display: "block", color: "#ccc" }}>+92-51-907-5864 | 5799</Text>
          <Text style={{ display: "block", color: "#ccc" }}>+92-334-2949667</Text>
        </Col>

        {/* Explore */}
        <Col xs={24} sm={12} md={5}>
          <Title level={5} style={{ color: "#fff" }}>Explore</Title>
          <Space direction="vertical">
            <Link style={{ color: "#ff9500" }}>SERL</Link>
            <Link style={{ color: "#ccc" }}>Space Outreach</Link>
            <Link style={{ color: "#ccc" }}>Space Education</Link>
            <Link style={{ color: "#ccc" }}>Capacity Building</Link>
            <Link style={{ color: "#ccc" }}>Resources</Link>
          </Space>
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "#444", margin: "30px 0" }} />

      {/* Bottom Section */}
      <Row gutter={[32, 32]} justify="space-between" align="middle">
        <Col xs={24} md={12}>
         <Space size={10} align="center">
           <Image
            src={logo}
            alt="NCGSA"
            style={{ marginBottom: 10 }}
          />
          <div>
            <Text style={{ color: "#ccc" }} strong>National Center of GIS & Space Applications</Text>
            <br />
            <Text style={{ color: "#ccc" }} strong>Institute of Space Technology</Text>
            <br />
            <Text style={{ color: "#ccc" }}>Islamabad, Pakistan</Text>
          </div>
         </Space>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#fff" }}>Contact Us</Title>
          <Text style={{ display: "block", color: "#ccc" }}>+92-51-907-5799</Text>
          <Text style={{ display: "block", color: "#ccc" }}>+92-51-907-5578</Text>
          <Text style={{ display: "block", color: "#ccc" }}>ncgsa@ist.edu.pk</Text>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#fff" }}>Follow Us</Title>
          <Space size="middle">
            <FacebookFilled style={{ fontSize: 20, color: "#fff" }} />
            <LinkedinFilled style={{ fontSize: 20, color: "#fff" }} />
            <InstagramFilled style={{ fontSize: 20, color: "#fff" }} />
            <YoutubeFilled style={{ fontSize: 20, color: "#fff" }} />
            <SendOutlined style={{ fontSize: 20, color: "#fff" }} />
            <WhatsAppOutlined style={{ fontSize: 20, color: "#fff" }} />
          </Space>
        </Col>
      </Row>

      {/* Copyright */}
      <Divider style={{ backgroundColor: "#888", margin: "30px 0 10px" }} />
      <Text style={{ color: "#888", fontSize: "12px", display: "block", textAlign: "center" }}>
        © 2025 — Higher Education Commission of Pakistan
      </Text>
    </div>
    </Footer>
  );
};

export default AppFooter;
