import React from 'react';
import { Card, Row, Col, Button, Tooltip, Typography, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../../Styles/Resource.css';
import DailyPakistan from '../../assets/images/DailyPakistan.jpg';
import UrduPoint from '../../assets/images/UrduPoint.jpg';
import WEnews from '../../assets/images/WEnews.jpg';

const { Title, Paragraph, Text } = Typography;

const astronomyCamp = [
  {
    key: 1,
  img: DailyPakistan,
    title: 'Daily Times',
    desc: 'Astronomy Camp commences at IST',
    link: 'https://dailytimes.com.pk/903554/astronomy-camp-commences-at-ist/'
  },
  {
    key: 2,
  img: UrduPoint,
    title: 'Urdu Point',
    desc: 'Astronomy Camp 2023 to start at IST from March',
    link: 'https://www.urdupoint.com/en/pakistan/astronomy-camp-2023-to-start-at-ist-from-marc-1649997.html'
  },
  {
    key: 3,
  img: WEnews,
    title: 'WE News',
    desc: 'Astronomy Camp 2023 to start from March 3',
    link: 'https://en.wenews.pk/astronomy-camp-2023-to-start-from-march-3/'
  }
];


const ResourceAstronomyCamp = () => {
  return (
    <>
      <Card className='resource-card'>
        <Title className='resource-main-title'>Astronomy Camp</Title>
        <Text className='resource-text'>Hands-on astronomy experiences for students and enthusiasts.</Text>
        <Row gutter={[24,]}>
         {astronomyCamp.map((item, idx) => (
          <Col lg={8} key={idx}>
          <Card className='inside-card' onClick={() => window.open(item.link)} >
          <Space>
          <img src={item.img} alt={item.title} width={100} />
          <Space direction="vertical" size={0}>
           <Title className='card-title'>{item.title}</Title>
          <Title className='card-description'>{item.desc}</Title>
          </Space>
        </Space>
      </Card>
    </Col>
    ))}
     </Row>
      </Card>
    </>
  );
};

export default React.memo(ResourceAstronomyCamp);
