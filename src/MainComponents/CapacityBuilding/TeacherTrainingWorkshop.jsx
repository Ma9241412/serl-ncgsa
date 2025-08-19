import React from 'react';
import { Collapse, Row, Col, Typography } from 'antd';
import Carousel from 'antd/es/carousel';
import activity1 from '../../assets/images/activity1.png';
import activity2 from '../../assets/images/activity2.png';
import activity3 from '../../assets/images/activity3.png';
import '../../Styles/CapacityBuilding.css';

const { Title, Paragraph } = Typography;

const text = (
  <p className="ttw-panel-text" style={{ textAlign: 'justify', margin: 0 }}>
    Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus blandit quis suspendisse aliquet nisi sodales consequat magna ante condimentum neque at luctus nibh finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam porta elementum a enim euismod quam justo lectus commodo augue arcu dignissim velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida.
  </p>
);

const collapseStyle = { marginBottom: 24 };

const getPanelContent = () => (
  <Row gutter={16} align="middle">
    <Col span={20}>{text}</Col>
    <Col span={4} style={{ textAlign: 'center' }}>
      <Carousel autoplay dots={true} style={{ width: '100%' }}>
        <img src={activity1} alt="activity1" style={{ maxWidth: '100%', maxHeight: '350px', width: '100%', height: 'auto', borderRadius: 8, objectFit: 'contain' }} />
        <img src={activity2} alt="activity2" style={{ maxWidth: '100%', maxHeight: '350px', width: '100%', height: 'auto', borderRadius: 8, objectFit: 'contain' }} />
        <img src={activity3} alt="activity3" style={{ maxWidth: '100%', maxHeight: '350px', width: '100%', height: 'auto', borderRadius: 8, objectFit: 'contain' }} />
      </Carousel>
    </Col>
  </Row>
);

const items = [
  {
    key: '1',
    label: <span className="ttw-label">IAU Teachers Training Workshop for SPACE Education</span>,
    children: getPanelContent(),
  },
  {
    key: '2',
    label: <span className="ttw-label">APRSAF Space Education Seminar</span>,
    children: getPanelContent(),
  },
  {
    key: '3',
    label: <span className="ttw-label">Space Ambassadors Training Program</span>,
    children: getPanelContent(),
  },
];

const mainHeading = (
  <Title level={2} className="cbs-title">
    Teachers Training <span className="cbs-title-highlight">Workshops</span>
  </Title>
);

const mainParagraph = (
  <Paragraph className="cbs-paragraph">
    The Space Education Research Lab (SERL) is committed to promote space science & technology by engaging school, college & university students, educators, professionals, and communities through nationwide outreach, hands-on learning, and educational support. With the national-level engagement and powerful outreach, SERL strives to nurture space-literate and future-ready society prepared to lead and innovate in the evolving space sector.
  </Paragraph>
);

const TeacherTrainingWorkshop = () => (
  <div>
    {mainHeading}
    {mainParagraph}
    <Collapse items={[items[0]]} bordered={false} defaultActiveKey={['1']} className="ttw-wrapper" style={collapseStyle} />
    <Collapse items={[items[1]]} bordered={false} defaultActiveKey={[]} className="ttw-wrapper" style={collapseStyle} />
    <Collapse items={[items[2]]} bordered={false} defaultActiveKey={[]} className="ttw-wrapper" style={collapseStyle} />
  </div>
);

export default TeacherTrainingWorkshop;