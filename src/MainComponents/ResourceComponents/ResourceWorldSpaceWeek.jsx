import React from 'react';
import { Card, Row, Col, Button, Tooltip, Typography, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../../Styles/Resource.css';
import domain1 from '../../assets/images/domain1.svg';
import domain2 from '../../assets/images/domain1.svg';
import domain3 from '../../assets/images/domain1.svg';
const { Title, Paragraph, Text } = Typography;

const worldSpaceWeek = [
  {
    key: 1,
    img: domain1,
    title: 'The News International',
    desc: 'World Space Week celebrations',
    link: 'https://www.thenews.com.pk/print/992599-world-space-week-celebrations'
  },
  {
    key: 2,
    img: domain2,
    title: 'The Nation',
    desc: 'Space festivity continues at IST under banner of World Space Week',
    link: 'https://www.nation.com.pk/08-Oct-2022/space-festivity-continues-at-ist-under-banner-of-world-space-week'
  },
  {
    key: 3,
    img: domain3,
    title: 'Daily Times',
    desc: 'World Space Week concludes at Institute of Space Technology',
    link: 'https://dailytimes.com.pk/1010080/world-space-week-concludes-at-institute-of-space-technology/'
  },
  {
    key: 4,
    img: domain3,
    title: 'Technology Times',
    desc: 'World Space Week celebrations to commence at IST',
    link: 'https://www.technologytimes.pk/2022/09/13/world-space-week-celebrations-to-commence-at-ist/'
  },
  {
    key: 5,
    img: domain3,
    title: 'The Express Tribune',
    desc: 'World Space Week from October 4',  
    link: 'https://tribune.com.pk/story/2321158/world-space-week-from-october-'
  },
  {
    key: 6,
    img: domain3, 
    title: 'News Pakistan',
    desc: 'World Space Week to be celebrated under Women in Space theme',
    link: 'https://newspakistan.tv/world-space-week-to-be-celebrated-under-women-in-space-theme/'
  },
  {
    key: 7,
    img: domain3,
    title: 'Urdu Point',
    desc: 'Space festivity continues at IST under banner of World Space Week',
    link: 'https://www.urdupoint.com/en/pakistan/space-festivity-continues-at-ist-under-banner-1574563.html'
  },
  {
    key: 8,
    img: domain3,
    title: 'Dispatch News Desk',
    desc: 'World Space Week 2021 kicks off at Institute of Space Technology',
    link: 'https://dnd.com.pk/world-space-week-2021-kicks-off-at-institute-of-space-technology/255105'
  },
  {
    key: 9,
    img: domain3,
    title: 'Radio Pakistan',
    desc: 'World Space Week celebrations start from today',
    link: 'https://www.radio.gov.pk/04-10-2020/world-space-week-celebrations-start-from-today'
  }
];

const ResourceWorldSpaceWeek = () => {
  return (
    <>
      <Card className='resource-card'>
        <Title className='resource-main-title'>World Space Week</Title>
        <Text className='resource-text'>Annual global celebration of space science and technology.</Text>
        <Row gutter={[24,]}>
         {worldSpaceWeek.map((item, idx) => (
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

export default React.memo(ResourceWorldSpaceWeek);
