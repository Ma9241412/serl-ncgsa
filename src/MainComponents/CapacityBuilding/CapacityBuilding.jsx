import React from "react";
import { Row, Col, Typography, Space } from "antd";
import "../../Styles/CapacityBuilding.css";

const { Title, Paragraph } = Typography;

const CapacityBuilding = () => {
  return (
    <div className="cb-bg">
      <Title className="cb-title">
        CAPACITY <br /> BUILDING
      </Title>
    </div>
  );
};

export default React.memo(CapacityBuilding);
