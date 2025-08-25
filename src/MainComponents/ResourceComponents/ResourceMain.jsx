import React from 'react';
import { Card, Row, Col, Button, Tooltip, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../../Styles/Resource.css';

const ResourceMain = () => {
  return (
    <>
      <Card className="resource-card" bodyStyle={{ padding: '40px 0', textAlign: 'center' }}>
        <Row justify="center">
          <Col xs={24} md={20} lg={16} xl={12} className="resource-title">
            Space Resources & Media Coverage
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={24} md={20} lg={16} xl={12} className="resource-paragraph">
            Comprehensive collection of space-related resources and press coverage
          </Col>
        </Row>
      </Card>
      <Card className="resource-card" bodyStyle={{ padding: '40px 0', textAlign: 'center' }}>
        <Row justify="center">
          <Col xs={24} md={20} lg={16} xl={12} className="resource-title">
            Useful Links
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={24} md={20} lg={16} xl={12} style={{ textAlign: 'center' }}>
              <Button
                type="primary"
                block
                size="large"
                className="nasa-btn"
                onClick={() => window.open('https://www.nasa.gov', '_blank')}
              >
                <Typography.Text strong>NASA Website</Typography.Text>
              </Button>
          </Col>
        </Row>
      </Card>
      <Row justify="center">
        <Col xs={24} md={20} lg={16} xl={12} className="resource-title">
          <Typography.Text strong className="resource-title">Press Release & media Coverage</Typography.Text>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ResourceMain);
