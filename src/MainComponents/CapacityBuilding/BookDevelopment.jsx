
import React from 'react';
import { Collapse, Row, Col, Image, Typography } from 'antd';
import Carousel from 'antd/es/carousel';
import activity1 from '../../assets/images/activity1.png';
import activity2 from '../../assets/images/activity2.png';
import activity3 from '../../assets/images/activity3.png';
import '../../Styles/CapacityBuilding.css';

const { Title, Paragraph, Text } = Typography;

const panelTexts = [
  (
    <Paragraph className="ttw-panel-text" style={{ textAlign: 'justify' }}>
      Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus blandit quis suspendisse aliquet nisi sodales consequat magna ante condimentum neque at luctus nibh finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam porta elementum a enim euismod quam justo lectus commodo augue arcu dignissim velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida.
    </Paragraph>
  )
];

const collapseStyle = { marginBottom: 24 };

const getPanelContent = () => {
  const images = [activity1, activity2, activity3];
  return (
    <Row gutter={16} align="top">
      <Col xs={24} md={16}>{panelTexts[0]}</Col>
      <Col xs={24} md={8} style={{ textAlign: 'center' }}>
        <Carousel autoplay dots={true}>
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`book-img${idx}`}
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
    label: <Text className="ttw-label">Grade 1-5 Activity Books</Text>,
    children: getPanelContent(),
  },
  {
    key: '2',
    label: <Text className="ttw-label">Grade 6-10 Activity Books</Text>,
    children: getPanelContent(),
  },
];

const mainHeading = (
  <Title level={2} className="cbs-title">
    Space Activity Book Development<Text className="cbs-title-highlight"></Text>
  </Title>
);

const mainParagraph = (
  <Paragraph className="cbs-paragraph" style={{ textAlign: 'justify' }}>
    The Space Education Research Lab (SERL) is committed to promote space science & technology by engaging school, college & university students, educators, professionals, and communities through nationwide outreach, hands-on learning, and educational support. With the national-level engagement and powerful outreach, SERL strives to nurture space-literate and future-ready society prepared to lead and innovate in the evolving space sector.
  </Paragraph>
);

const BookDevelopment = () => (
  <div className="section-container">
    {mainHeading}
    {mainParagraph}
    <Collapse items={[items[0]]} bordered={false} defaultActiveKey={['1']} className="ttw-wrapper" style={collapseStyle} />
    <Collapse items={[items[1]]} bordered={false} defaultActiveKey={[]} className="ttw-wrapper" style={collapseStyle} />
  </div>
);

export default BookDevelopment;