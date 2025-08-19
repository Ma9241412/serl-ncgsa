import React from 'react';
import { Row, Col, Typography, Space } from "antd";
import '../../Styles/CapacityBuilding.css';

const { Title, Paragraph } = Typography;

const CapacityBuilding = () => {
  return (
    <Row className="cb-bg" align="middle" justify="center" >
      <Col xs={24} md={20} lg={16} xl={12} className="cb-col">
        <Space direction="vertical" align="center" className="cb-space">
          <Title className="cb-title">CAPACITY BUILDING</Title>
        </Space>
      </Col>
    </Row>
  );
};

export default React.memo(CapacityBuilding);
