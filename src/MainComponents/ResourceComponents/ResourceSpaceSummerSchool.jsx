import React from 'react';
import { Card, Row, Col, Button, Tooltip, Typography, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../../Styles/Resource.css';
import domain1 from '../../assets/images/domain1.svg';
import domain2 from '../../assets/images/domain1.svg';
import domain3 from '../../assets/images/domain1.svg';
const { Title, Paragraph, Text } = Typography;

const spaceSummerSchool = [
  {
    key: 1,
    img: domain1,
    title: 'The Nation',
    desc: 'Sixth Space Summer School 2022 concludes at IST',
    link: 'https://www.nation.com.pk/31-Jul-2022/sixth-space-summer-school-2022-concludes-at-ist'
  },
  {
    key: 2,
    img: domain2,
    title: 'The Express Tribune',
    desc: 'Space Summer School receives huge response',
    link: 'https://tribune.com.pk/story/2368023/space-summer-school-receives-huge-response'
  },
  {
    key: 3,
    img: domain3,
    title: 'The Express Tribune',
    desc: 'First Space Summer School begins at IST',
    link: 'https://tribune.com.pk/story/1460306/first-space-summer-school-begins-ist'
  },
  {
    key: 4,
    img: domain3,
    title: 'The Express Tribune',
    desc: 'Promoting science & space tech, institute’s summer camp concludes',
    link: 'https://tribune.com.pk/story/1769825/promoting-science-space-tech-institutes-summer-camp-concludes'
  },
  {
    key: 5,
    img: domain3,
    title: 'Pakistan Observer',
    desc: '6th Space Summer School opens at IST',
    link: 'https://pakobserver.net/6th-space-summer-school-opens-at-ist/'
  },
  {
    key: 6,
    img: domain3,
    title: 'The News International',
    desc: '6th Space Summer School opens at IST',
    link: 'https://www.thenews.com.pk/print/977203-sixth-space-summer-school-opens-at-ist'
  },
  {
    key: 7,
    img: domain3,
    title: 'Pakistan Today',
    desc: '6th Space Summer School to begin at IST from 25th July',
    link: 'https://www.pakistantoday.com.pk/2022/07/02/sixth-space-summer-school-to-begin-at-ist-from-25th/'
  },
  {
    key: 8,
    img: domain3,
    title: 'Technology Times',
    desc: 'Space Summer School concludes at IST',
    link: 'https://www.technologytimes.pk/2018/07/27/space-summer-school-concludes-ist/'
  },
  {
    key: 9,
    img: domain3,
    title: 'ProPakistani',
    desc: 'Space Summer School to be held next month in Islamabad',
    link: 'https://propakistani.pk/2022/06/28/space-summer-school-to-be-held-next-month-in-islamabad/'
  },
  {
    key: 10,
    img: domain3,
    title: 'Daily Pakistan',
    desc: 'Two-week Space Summer School kicks off at IST',
    link: 'https://en.dailypakistan.com.pk/18-Jul-2018/two-week-space-summer-school-kicks-off-at-ist'
  }
];


const ResourceSpaceSummerSchool = () => {
  return (
    <>
      <Card className='resource-card'>
        <Title className='resource-main-title'>Space Summer School</Title>
        <Text className='resource-text'>Annual Space Education Program at IST. Receiving extensive media coverage</Text>
        <Row gutter={[24,]}>
         {spaceSummerSchool.map((item, idx) => (
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

export default React.memo(ResourceSpaceSummerSchool);
