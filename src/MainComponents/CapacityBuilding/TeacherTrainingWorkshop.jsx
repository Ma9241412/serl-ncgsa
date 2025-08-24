import React from 'react';
import { Collapse, Row, Col, Image, Typography } from 'antd';
import Carousel from 'antd/es/carousel';
import activity1 from '../../assets/images/teachertraining.jpg';
import activity2 from '../../assets/images/teachertraining2.jpg';
import activity3 from '../../assets/images/teachertraining3.jpg';
import aprsaf1 from '../../assets/images/APRSAF.jpg';
import aprsaf2 from '../../assets/images/APRSAF2.jpg';
import aprsaf3 from '../../assets/images/APRSAF3.jpg';
import '../../Styles/CapacityBuilding.css';

const { Title, Paragraph, Text } = Typography;


const panelTexts = [
  (
    <Paragraph className="ttw-panel-text" >
      The Space Education and Research Lab (SERL) of the National Center of GIS and Space Applications (NCGSA) 
      organized a three-day Teachers’ Training Workshop on Space Education from September 14–16, 2023, at the 
      Institute of Space Technology (IST), Islamabad. The workshop was conducted in collaboration with the IAU 
      Office of Astronomy for Education, an initiative of the International Astronomical Union. Specially designed 
      for primary and secondary science school teachers, the workshop aligned with the national space education 
      curriculum of Pakistan. It aimed to enhance teachers’ understanding of astronomy and space science, and equip 
      them with interactive tools, teaching strategies, and hands-on activities to inspire young learners.
    </Paragraph>
  ),
  (
    <Paragraph className="ttw-panel-text">
      The Japan Aerospace Exploration Agency (JAXA), the Space Education & Awareness Drive (SEAD) of SUPARCO, and the 
      Space Education and Research Lab (SERL) of the National Center of GIS and Space Applications (NCGSA) jointly 
      organized the Space Education Seminar of the Asia-Pacific Regional Space Agency Forum (APRSAF) on February 1, 
      2023 at the Institute of Space Technology (IST), Islamabad. The event was attended by over 100 students and 
      educators and served as an engaging platform to promote space science education and outreach across the Asia-Pacific 
      region. Experts from JAXA and NCGSA delivered inspiring talks and hands-on activities, introducing participants to key 
      concepts in astronomy, space exploration, and science communication. The seminar concluded with a special stargazing session 
      at IST Astronomical Observatory of NCGSA, organized in collaboration with Astronomical Societies of Pakistan, offering participants 
      a memorable celestial experience under the night sky.
    </Paragraph>
  ),
  (
    <Paragraph className="ttw-panel-text">
      The Space Ambassadors Training Program prepares educators to become advocates for space science, equipping them with outreach strategies and leadership skills to inspire the next generation of space enthusiasts.
    </Paragraph>
  )
];

const collapseStyle = { marginBottom: 24 };


const getPanelContent = (panelIndex) => {
  let images = [];
  if (panelIndex === 0) {
    images = [activity1, activity2, activity3];
  } else if (panelIndex === 1) {
    images = [aprsaf1, aprsaf2, aprsaf3];
  } else {
    images = [activity1];
  }
  return (
    <Row gutter={16} align="top">
      <Col xs={24} md={16}>{panelTexts[panelIndex]}</Col>
      <Col xs={24} md={8}>
        <Carousel autoplay dots={true}>
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`panel${panelIndex}-img${idx}`}
              preview={false}
            />
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

const items = [
  {
    key: '1',
    label: <Text className="ttw-label">IAU Teachers Training Workshop for SPACE Education</Text>,
    children: getPanelContent(0),
  },
  {
    key: '2',
    label: <Text className="ttw-label">APRSAF Space Education Seminar</Text>,
    children: getPanelContent(1),
  },
  {
    key: '3',
    label: <Text className="ttw-label">Space Ambassadors Training Program</Text>,
    children: getPanelContent(2),
  },
];

const mainHeading = (
  <Title  className="cbs-title">
    Teachers Training Workshops <Text className="cbs-title-highlight"></Text>
  </Title>
);

const mainParagraph = (
  <Paragraph className="cbs-paragraph">
    The Space Education Research Lab (SERL) is committed to promote space science & technology by engaging school, college & university students, educators, professionals, and communities through nationwide outreach, hands-on learning, and educational support. With the national-level engagement and powerful outreach, SERL strives to nurture space-literate and future-ready society prepared to lead and innovate in the evolving space sector.
  </Paragraph>
);

const TeacherTrainingWorkshop = () => (
  <div className="section-container">
    {mainHeading}
    {mainParagraph}
    <Collapse items={[items[0]]} bordered={false} defaultActiveKey={["1"]} className="ttw-wrapper" style={collapseStyle} />
    <Collapse items={[items[1]]} bordered={false} defaultActiveKey={[]} className="ttw-wrapper" style={collapseStyle} />
    <Collapse items={[items[2]]} bordered={false} defaultActiveKey={[]} className="ttw-wrapper" style={collapseStyle} />
  </div>
);

export default TeacherTrainingWorkshop;