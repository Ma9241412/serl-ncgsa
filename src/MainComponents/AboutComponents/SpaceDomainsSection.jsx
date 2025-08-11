import React from 'react';
import { Row, Col, Typography, Grid, Card } from 'antd';
import { ReactComponent as Domain1Icon } from '../../assets/images/domain1.svg';
import { ReactComponent as Domain2Icon } from '../../assets/images/domain2.svg';
import { ReactComponent as Domain3Icon } from '../../assets/images/domain3.svg';
import { ReactComponent as Domain4Icon } from '../../assets/images/domain4.svg';
import { ReactComponent as Domain5Icon } from '../../assets/images/domain5.svg';
import '../../Styles/About.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  const domains = [
    { icon: <Domain1Icon className="domain-icon" />, label: 'Astronomy & Astrophysics' },
    { icon: <Domain2Icon className="domain-icon" />, label: 'Aviation' },
    { icon: <Domain3Icon className="domain-icon" />, label: 'Earth & ATMOSPHERE' },
    { icon: <Domain4Icon className="domain-icon" />, label: 'Rocketry' },
    { icon: <Domain5Icon className="domain-icon" />, label: 'Satellite Technology' }
  ];

  return (
    <Row className="domains-wrapper" justify="start">
      <Row justify="start" className="domains-row-text">
        <Col xs={24} lg={23} className="domains-text-col">
          <Title level={2} className="domains-title">Space Domains</Title>
        </Col>
      </Row>

      <Row gutter={[0, 0]} justify="space-between" className="domains-row-icons">
        {domains.map((domain, index) => (
          <Col xs={24} lg={4} key={index} className="domains-icon-col">
            <div className="domain-icon-circle">
              {domain.icon}
            </div>
            <Typography.Text className="domain-label">{domain.label}</Typography.Text>
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default React.memo(SpaceOutreach);