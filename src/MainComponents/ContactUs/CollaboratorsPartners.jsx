import React from "react";
import { Typography, Space } from "antd";
import AwardsSlider from "./AwardsSlider";

const { Title } = Typography;

const CollaboratorsPartners = () => (
  <>
    <Space direction="vertical" size={0}>
      <Title className="contact-title" >
        Collaborators & Partners
      </Title>
      <div className="underline" />
    </Space>
    <AwardsSlider />
    
  </>
);

export default CollaboratorsPartners;
