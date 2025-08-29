import React from 'react';
import { Row, Col, Typography, Grid, Card, Image } from 'antd';
import contributionImg from '../../assets/images/contribution.png';
import '../../Styles/About.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
  <Row>
  <Col xs={24} lg={12}>
    <Title className="sub-title">Contribution</Title>
    <div className="yellow-thin-underline" />
    <Paragraph className="main-paragraph">
      In pursuit of achieving United Nations Sustainable Development Goals (SDGs) 
      through space technology, particularly focusing on their relevance to 
      developing countries, our dedicated team of researchers embarked on a 
      pioneering endeavor to establish Space Education Research Lab (SERL) in 
      2020 at a public university, the Institute of Space Technology at Islamabad, 
      Pakistan. SERL envisions to foster space awareness, education, and outreach 
      across schools, colleges, and universities, building a resilient pipeline 
      of talent for the growing space ecosystem. With a commitment to expanding 
      the frontiers of space knowledge, SERL actively drives the dissemination 
      of space education through space-related festivities to raise awareness 
      about space technology and its applications among the broader community.
    </Paragraph>
  </Col>
  
  <Col xs={24} lg={12}>
    <div className="contrib-image-offset" style={{ textAlign: 'center' }}>
      <Card bordered={false} className="contrib-image-card">
        <Image
        preview={false}
          src={contributionImg}
        />
      </Card>
    </div>
  </Col>
</Row>
  );
};

export default React.memo(SpaceOutreach);