import React from 'react';
import { Row, Col, Typography, Grid, Divider, Card } from 'antd';
import '../../Styles/About.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  const awards = [
    { src: require('../../assets/images/award1.png'), alt: 'Award 1' },
    { src: require('../../assets/images/award2.png'), alt: 'Award 2' },
    { src: require('../../assets/images/award3.png'), alt: 'Award 3' },
    { src: require('../../assets/images/award4.png'), alt: 'Award 4' },
    { src: require('../../assets/images/award5.png'), alt: 'Award 5' },
    { src: require('../../assets/images/award6.png'), alt: 'Award 6' },
    { src: require('../../assets/images/award7.png'), alt: 'Award 7' },
    { src: require('../../assets/images/award8.png'), alt: 'Award 8' },
    { src: require('../../assets/images/award9.png'), alt: 'Award 9' },
    { src: require('../../assets/images/award10.png'), alt: 'Award 10' }
  ];

  return (
   
      <Row gutter={[24, 24]} justify="center" >
            <Col xs={24} lg={24}>
          <Title className="sub-title">Awards & Honors</Title>
          <div className="yellow-thin-underline">
          </div>
        </Col>
        {awards.map((award, idx) => (
          <Col xs={24} sm={12} md={8} lg={4} xl={4} key={idx}>
            <Card bordered={false} className="award-card">
              <img src={award.src} alt={award.alt} className="award-img" />
            </Card>
          </Col>
        ))}
      </Row>
  );
};

export default React.memo(SpaceOutreach);