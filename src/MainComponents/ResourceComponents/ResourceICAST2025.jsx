import React from 'react';
import { Card, Row, Col, Button, Tooltip, Typography, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../../Styles/Resource.css';
import domain1 from '../../assets/images/domain1.svg';
import domain2 from '../../assets/images/domain1.svg';
import domain3 from '../../assets/images/domain1.svg';
const { Title, Paragraph, Text } = Typography;

const icast = [
  {
    key: 1,
    img: domain1,
    title: 'The News International',
    desc: 'Pakistan to lead global dialogue on space applications with ICAST 2025',
    link: 'https://e.thenews.com.pk/pindi/17-04-2025/page3'
  },
  {
    key: 2,
    img: domain2,
    title: 'The Express Tribune',
    desc: 'Pakistan to lead global dialogue on space applications with ICAST 2025',
    link: 'https://tribune.com.pk/epaper/news/Karachi/2025-04-17/OTI0M2U2YjIwYmI2YmI4ODQ1ZWEwOTUyZDVlZDgyZmMuanBlZw'
  },
  {
    key: 3,
    img: domain3,
    title: 'APP',
    desc: 'Pakistan to lead global dialogue on space applications with ICAST 2025',
    link: 'https://www.app.com.pk/national/pakistan-to-lead-global-dialogue-on-space-applications-with-icast-2025/'
  },
  {
    key: 4,
    img: domain3,
    title: 'Dunya News',
    desc: 'Pakistan to lead global dialogue on space applications with ICAST 2025',
    link: 'https://dunyanews.tv/en/Technology/854353-pakistan-to-lead-global-dialogue-on-space-applications-with-icast-2025'
  }
];


const ResourceICAST2025 = () => {
  return (
    <>
      <Card className='resource-card'>
        <Title className='resource-main-title'>ICAST 2025</Title>
        <Text className='resource-text'>International Conference on Aerospace Science and Technology.</Text>
        <Row gutter={[24,]}>
         {icast.map((item, idx) => (
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

export default React.memo(ResourceICAST2025);
