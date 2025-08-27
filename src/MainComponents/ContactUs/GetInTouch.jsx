import React from "react";
import { Typography, Card, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "../../Styles/ContactUs.css";

const { Title, Paragraph, Text } = Typography;

const GetInTouch = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginTop: "38px",
    }}
  >
    {/* Left Content */}
    <div>
      <Text className="contact-text" style={{ margin: 0 }}>
        Get Started
      </Text>
      <Title className="contact-main-title" style={{ margin: 0 }}>
        Get in touch with us. <br /> We're here to assist you.
      </Title>
    </div>
    {/* Right Social Icons */}
    <Space
      direction="vertical"
      size="large"
      style={{
        marginRight: "30px", marginTop: "90px"
      }}
    >
      <a href="https://www.facebook.com/SpaceOutreach" className="icons-styles">
        <FacebookOutlined />
      </a>
      <a href="https://www.instagram.com/serl.ncgsa" className="icons-styles">
        <InstagramOutlined />
      </a>
      <a
        href="https://www.linkedin.com/company/serl-ncgsa"
        className="icons-styles"
      >
        <LinkedinOutlined />
      </a>
    </Space>
  </div>
);

export default GetInTouch;
