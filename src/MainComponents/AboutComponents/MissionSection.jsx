import React from 'react';
import { Row, Col, Typography, Grid, Card } from 'antd';
import { ReactComponent as Mission1Icon } from '../../assets/images/mission1.svg';
import { ReactComponent as Mission2Icon } from '../../assets/images/mission2.svg';
import { ReactComponent as Mission3Icon } from '../../assets/images/mission3.svg';
import { ReactComponent as Mission4Icon } from '../../assets/images/mission4.svg';
import { ReactComponent as Mission5Icon } from '../../assets/images/mission5.svg';
import '../../Styles/About.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  const missionCards = [
    { icon: <Mission1Icon className="mission-icon" />, title: 'Awareness &', subtitle: 'Engagement' },
    { icon: <Mission2Icon className="mission-icon" />, title: 'Educator', subtitle: 'Empowerment' },
    { icon: <Mission3Icon className="mission-icon" />, title: 'Curriculum', subtitle: 'Enhancement' },
    { icon: <Mission4Icon className="mission-icon" />, title: 'STEM/STEAM', subtitle: 'Enrichment' },
    { icon: <Mission5Icon className="mission-icon" />, title: 'Media', subtitle: 'Outreach' }
  ];

  return (
    <>
          <Title className="sub-title">Mission</Title>
          <div className="yellow-thin-underline" />
          <Paragraph className="main-paragraph">
            To develop innovative and sustainable interactive learning methods and strategies for Space Science and Technology awareness, education and popularization by unification of scientific and pedagogical methodologies especially for the school, college & university students and for early career researchers & academicians. The five major objectives are mentioned below:
          </Paragraph>

      <Row justify="space-between" className="mission-cards-row">
        {missionCards.map((card, index) => (
          <Col xs={24} lg={4} key={index} className="mission-card-col">
            <Card bordered={false} className="mission-card">
              <div className="mission-card-top">{card.icon}</div>
              <div className="mission-card-bottom">
                <Typography.Text className="mission-card-title">{card.title}</Typography.Text>
                <Typography.Text className="mission-card-subtitle">{card.subtitle}</Typography.Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      </>
  );
};

export default React.memo(SpaceOutreach);