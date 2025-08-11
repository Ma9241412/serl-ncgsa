import React from 'react';
import { Row, Col, Typography, Grid, Card } from 'antd';
import contributionImg from '../../assets/images/contribution.png';
import '../../Styles/About.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
  <Row className="contrib-wrapper contrib-flex-row" justify="space-between" align="middle" gutter={[32, 32]}>
  <Col xs={24} lg={12} className="contrib-text-col contrib-flex-col">
        <Title level={2} className="contrib-title">Contribution</Title>
        <div className="section-underline" />
        <Paragraph className="contrib-paragraph">
          In pursuit of achieving United Nations Sustainable Development Goals (SDGs) through space technology, particularly focusing on their relevance to developing countries, our dedicated team of researchers embarked on a pioneering endeavor to establish Space Education Research Lab (SERL) in 2020 at a public university, the Institute of Space Technology at Islamabad, Pakistan. SERL envisions to foster space awareness, education, and outreach across schools, colleges, and universities, building a resilient pipeline of talent for the growing space ecosystem. With a commitment to expanding the frontiers of space knowledge, SERL actively drives the dissemination of space education through space-related festivities to raise awareness about space technology and its applications among the broader community.
        </Paragraph>
      </Col>
      <Col xs={24} lg={11} className="contrib-image-col contrib-flex-col">
        <div className="contrib-image-offset">
          <Card bordered={false} className="contrib-image-card">
            <img src={contributionImg} alt="SERL Contribution Framework" className="contrib-image" />
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default React.memo(SpaceOutreach);