import React from 'react';
import { Card, Row, Col, Button, Tooltip, Typography, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../../Styles/Resource.css';
import domain1 from '../../assets/images/domain1.svg';
import ProPakistani from '../../assets/images/ProPakistani.jpg';
import TechJuice from '../../assets/images/TechJuice.jpg';
import TheExpressTribune from '../../assets/images/TheExpressTribune.jpg';
import PakistanToday from '../../assets/images/PakistanToday.jpg';
import TheNation from '../../assets/images/TheNation.jpg';
import TheInternationalNews from '../../assets/images/TheInternationalNews.jpg';
const { Title, Paragraph, Text } = Typography;

const abdusSalamContest = [
  {
    key: 1,
    img: ProPakistani,
    title: 'ProPakistani',
    desc: 'Space Summer School to be held next month in Islamabad',
    link: 'https://propakistani.pk/2022/06/28/space-summer-school-to-be-held-next-month-in-islamabad/'
  },
  {
    key: 2,
    img: TechJuice,
    title: 'TechJuice',
    desc: 'Institute of Space Technology starts two-week Space Summer School program',
    link: 'https://www.techjuice.pk/institute-of-space-technology-starts-two-week-space-summer-school-program/'
  },
  {
    key: 3,
    img: TheExpressTribune,
    title: 'The Express Tribune',
    desc: 'Space Technology: IST hosts Space Summer School',
    link: 'https://tribune.com.pk/story/1760608/space-technology-ist-hosts-space-summer-school'
  },
  {
    key: 4,
    img: PakistanToday,
    title: 'Pakistan Today',
    desc: '6th Space Summer School to begin at IST from 25th July',
    link: 'https://www.pakistantoday.com.pk/2022/07/02/sixth-space-summer-school-to-begin-at-ist-from-25th/'
  },
  {
    key: 5,
    img: domain1,
    title: 'Technology Times',
    desc: 'IST initiated Pakistan’s first Space Summer School',
    link: 'https://www.technologytimes.pk/2017/07/18/ist-initiated-pakistans-first-space-summer-school/'
  },
  {
    key: 6,
    img: TheNation,
    title: 'The Nation',
    desc: 'Space Summer School concludes at IST',
    link: 'https://www.nation.com.pk/31-Jul-2018/space-summer-school-concludes-at-ist'
  },
  {
    key: 7,
    img: TheInternationalNews,
    title: 'The News International',
    desc: 'IST Space Summer School concludes',
    link: 'https://www.thenews.com.pk/print/218420-IST-Space-Summer-School-concludes'
  }
];


const ResourceDrAbdusSalamContest = () => {
  return (
    <>
      <Card className='resource-card'>
        <Title className='resource-main-title'>Dr. Abdus Salam Contest</Title>
        <Text className='resource-text'>International Conference on Aerospace Science and Technology.</Text>
        <Row gutter={[24,]}>
         {abdusSalamContest.map((item, idx) => (
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

export default React.memo(ResourceDrAbdusSalamContest);
