
import React from 'react';
import { Collapse, Row, Col, Image, Typography } from 'antd';
import Carousel from 'antd/es/carousel';
import activity1 from '../../assets/images/spacelaw.jpg';
import activity2 from '../../assets/images/spacelaw2.jpg';
import activity3 from '../../assets/images/spacelaw3.jpg';
import gis1 from '../../assets/images/nationalgissummit.jpg';
import gis2 from '../../assets/images/nationalgissummit2.jpg';
import gis3 from '../../assets/images/nationalgissummit3.jpg';
import '../../Styles/CapacityBuilding.css';

const { Title, Paragraph, Text } = Typography;

const panelTexts = [
  (
    <>
      <Paragraph className="ttw-panel-text" style={{ textAlign: 'justify' }}>
        The National Center of GIS and Space Applications (NCGSA) successfully hosted a two-day 
        Workshop on Space Law and Policy from September 3–4, 2024, at the Institute of Space Technology 
        (IST), Islamabad. The event brought together over 60 participants from academia, public institutions, 
        and private organizations, fostering informed dialogue on the legal and regulatory dimensions of 
        outer space activities. The workshop featured a distinguished lineup of national and international 
        experts, including:
      </Paragraph>
      <ul className="ttw-panel-text" style={{ textAlign: 'justify', margin: 0 }}>
        <li>Hamza Hameed, Senior Practice Manager, Access Partnership (Singapore)</li>
        <li>Muhammad Arham Khan, Divisional Head, International Affairs, SUPARCO</li>
        <li>Dr. Maria Saifuddin Effendi, Assistant Professor, National Defence University (NDU)</li>
        <li>Muhammad Naveed Hafiz, General Manager, International Affairs, SUPARCO</li>
        <li>Ms. Aisha Jagirani, Director General, APSCO</li>
        <li>Dr. Ammar Masood, Dean, Faculty of Computing & AI, Air University</li>
      </ul>
      <Paragraph className="ttw-panel-text" style={{ textAlign: 'justify' }}>
        Key topics included space law and international treaties, space governance and diplomacy, regional 
        and international cooperation, cybersecurity, space sustainability, and Pakistan’s National Space 
        Policy. The workshop fostered insightful discussions on space governance, marking a significant step 
        in advancing legal and policy frameworks for Pakistan’s growing space sector.
      </Paragraph>
    </>
  ),
  (
    <Paragraph className="ttw-panel-text" style={{ textAlign: 'justify' }}>
      The National Center of GIS and Space Applications (NCGSA) successfully hosted the National GIS Summit 2024 
      on November 20, 2024, at the Institute of Space Technology (IST), Islamabad, to commemorate International 
      GIS Day. The summit brought together a diverse audience of experts, professionals, and students from across 
      Pakistan to explore the transformative role of geospatial technologies in advancing sustainable development.
      The program featured thematic sessions on key areas including geospatial solutions for sustainable development, GIS 
      for agriculture and food security, climate change mitigation, disaster preparedness, geo-health, geo-forensics, 
      and the integration of artificial intelligence in GIS applications.
    </Paragraph>
  )
];

const collapseStyle = { marginBottom: 24 };

const getPanelContent = (panelIndex) => {
  let images = [];
  if (panelIndex === 0) {
    images = [activity1, activity2, activity3];
  } else {
    images = [gis1, gis2, gis3];
  }
  return (
    <Row gutter={16} align="top">
      <Col xs={24} md={16}>{panelTexts[panelIndex]}</Col>
      <Col xs={24} md={8} style={{ textAlign: 'center' }}>
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
    label: <Text className="ttw-label">International Workshop on Space Law Policy</Text>,
    children: getPanelContent(0),
  },
  {
    key: '2',
    label: <Text className="ttw-label">National GIS Summit</Text>,
    children: getPanelContent(1),
  },
];

const mainHeading = (
  <Title level={2} className="cbs-title">
    Professionals Training<Text className="cbs-title-highlight"></Text>
  </Title>
);

const mainParagraph = (
  <Paragraph className="cbs-paragraph" style={{ textAlign: 'justify' }}>
    The Space Education Research Lab (SERL) is committed to promote space science & technology by engaging school, college & university students, educators, professionals, and communities through nationwide outreach, hands-on learning, and educational support. With the national-level engagement and powerful outreach, SERL strives to nurture space-literate and future-ready society prepared to lead and innovate in the evolving space sector.
  </Paragraph>
);

const ProfessionalsTraining = () => (
  <div className="section-container">
    {mainHeading}
    {mainParagraph}
    <Collapse items={[items[0]]} bordered={false} defaultActiveKey={['1']} className="ttw-wrapper" style={collapseStyle} />
    <Collapse items={[items[1]]} bordered={false} defaultActiveKey={[]} className="ttw-wrapper" style={collapseStyle} />
  </div>
);

export default ProfessionalsTraining;