import React from 'react';
import Layout from './components/layouts/layout';
import { Typography, Row, Col } from 'antd';

// Temporary Home Page Content
const HomeContent = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Row>
        <Col lg={12}>
          <Typography.Title>
            SPACE
          </Typography.Title>
          <Typography.Title>
            EDUCATION | AWARENESS | OUTREACH
          </Typography.Title>
          <Typography.Title>
            EDUCATION | AWARENESS | OUTREACH
          </Typography.Title>
        </Col>
        <Col lg={12}>
          <Typography.Title>
            SPACE
          </Typography.Title>
          <Typography.Title>
            EDUCATION | AWARENESS | OUTREACH
          </Typography.Title>
          <Typography.Title>
            EDUCATION | AWARENESS | OUTREACH
          </Typography.Title>
        </Col>

      </Row>
    </div>
  );
};

const App = () => {
  return (
    <Layout activeNavItem="HOME">
      <HomeContent />
    </Layout>
  );
};

export default App;