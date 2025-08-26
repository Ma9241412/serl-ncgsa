import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const ContactUs = () => (
  <Card style={{ maxWidth: 500, margin: '40px auto', textAlign: 'center' }}>
    <Title level={2}>Contact Us</Title>
    <Paragraph>
      For any queries, suggestions, or feedback, please reach out to us at:
    </Paragraph>
    <Paragraph>
      <strong>Email:</strong> info@serl-ist.pk<br/>
      <strong>Phone:</strong> +92-51-1234567<br/>
      <strong>Address:</strong> Institute of Space Technology, Islamabad
    </Paragraph>
  </Card>
);

export default ContactUs;
