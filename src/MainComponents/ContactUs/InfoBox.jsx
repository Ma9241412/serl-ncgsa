import React from "react";
import { Button, Typography, Col, Form, Input, Row, Space } from "antd";
const { Text } = Typography;

const AdvancedSearchForm = () => {
  const [form] = Form.useForm();

  const formStyle = {
    maxWidth: "none",
    background: "#f5f5f5", // fallback for token.colorFillAlter
    borderRadius: 8,         // fallback for token.borderRadiusLG
    padding: 24,
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={(values) => console.log("Received values: ", values)}
    >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            name="name"
            label={<Text className="contact-text">Your Name</Text>}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Your Name" className="input-underline" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name="email"
            label={<Text className="contact-text">Email Address</Text>}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              { required: true, type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="Email Address" className="input-underline" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name="phone"
            label={<Text className="contact-text">Phone Number (optional)</Text>}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="Phone Number" className="input-underline" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            name="message"
            label={<Text className="contact-text">Message</Text>}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <Input.TextArea
              placeholder="Your Message"
              rows={4}
              className="input-underline"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Space>
        <Button type="primary" htmlType="submit" className="contact-button">
          Leave us a Message
        </Button>
      </Space>
    </Form>
  );
};

const InfoBox = () => <AdvancedSearchForm />;

export default InfoBox;
