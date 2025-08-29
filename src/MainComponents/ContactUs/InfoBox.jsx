import React, { useState } from "react";
import { Button, Typography, Col, Form, Input, Row, Select, Space, theme } from "antd";
const { Title, Text } = Typography;
const { Option } = Select;


const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const getFields = () => {
    // Name, Email, Phone in same row, labels above inputs
    const children = [];
    children.push(
      <Col span={8} key={0}>
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
    );
    children.push(
      <Col span={8} key={1}>
        <Form.Item
          name="email"
          label={<Text className="contact-text">Email Address</Text>}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input placeholder="Email Address" className="input-underline" />
        </Form.Item>
      </Col>
    );
    children.push(
      <Col span={8} key={2}>
        <Form.Item
          name="phone"
          label={<Text className="contact-text">Phone Number (optional)</Text>}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            { required: false},
          ]}
        >
          <Input placeholder="Phone Number" className="input-underline" />
        </Form.Item>
      </Col>
    );
    // Message
        children.push(
          <Col span={24} key={3}>
            <Form.Item
              name="message"
              label={<Text className="contact-text">Message</Text>}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: "Please enter your message!" }]}
            >
              <Input.TextArea placeholder="Your Message" rows={4} className="input-underline" style={{ width: '100%', marginLeft: 0 }} />
            </Form.Item>
          </Col>
        );
    return children;
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Space >
        <Button type="primary" htmlType="submit" className="contact-button">
          Leave us a Message
        </Button>
      </Space>
    </Form>
  );
};


export default InfoBox;
