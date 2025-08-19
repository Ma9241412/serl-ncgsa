
import React from 'react';
import { Typography, Card, Image, List, Avatar, Carousel } from 'antd';
import { ClockCircleOutlined, BookOutlined, ExperimentOutlined, StarOutlined } from '@ant-design/icons';
import activity1 from '../../../assets/images/activity1.png';
import activity2 from '../../../assets/images/activity2.png';
import activity3 from '../../../assets/images/activity3.png';
import spaceOutreach01 from '../../../assets/images/SpaceOutreach01.jpg';
import spaceOutreach03 from '../../../assets/images/SpaceOutreach03.jpg';
import spaceOutreach07 from '../../../assets/images/SpaceOutreach07.jpg';
import '../../../Styles/SpaceOutreachSection.css';

const { Title, Text } = Typography;

const heroImages = [
  { src: activity1, alt: 'STEMx Webinar Activity 1' },
  { src: activity2, alt: 'STEMx Webinar Activity 2' },
  { src: activity3, alt: 'STEMx Webinar Activity 3' }
];

const spaceOutreachImages = [
  { src: spaceOutreach01, alt: 'Space Outreach 01' },
  { src: spaceOutreach03, alt: 'Space Outreach 03' },
  { src: spaceOutreach07, alt: 'Space Outreach 07' }
];

const activities = [
  { title: 'Public Lectures And Seminars Featuring Leading Space Scientists And Researchers', icon: <ClockCircleOutlined /> },
  { title: 'School Competitions And Activities Designed To Engage Students With Space Science', icon: <BookOutlined /> },
  { title: 'Astronomy Observation Sessions With Professional Telescopes And Expert Guidance', icon: <StarOutlined /> },
  { title: 'Workshops And Hands-On Activities Exploring Space Technology And Principles', icon: <ExperimentOutlined /> }
];

const STEMxWebinar = () => {
  return (
    <>
      <Card className="tsw-card" bordered={false}>
        <Title level={3} className="tsw-card-title">STEMx-Webinar</Title>
        <div className="tsw-carousel-wrap">
          <Carousel autoplay autoplaySpeed={3000} dots dotPosition="bottom" className="tsw-carousel">
            {spaceOutreachImages.map((image, index) => (
              <div key={index} className="tsw-carousel-slide">
                <img src={image.src} alt={image.alt} className="tsw-carousel-img" />
              </div>
            ))}
          </Carousel>
        </div>
        <Text className="tsw-desc">
          The 2020 Theme "Satellites Improve Life" Celebrates The Contribution Of Satellites To Human Development And Welfare. Learn How Satellites Help Us With Communication, Navigation, Weather Forecasting, Resource Management, And Disaster Response.
        </Text>
      </Card>

      <div className="tsw-activities">
        <Title level={2} className="tsw-activities-title">Activities</Title>
        <div className="tsw-underline" />
        <List
          className="tsw-activities-list"
          dataSource={activities}
          renderItem={(item) => (
            <List.Item className="tsw-activity-item">
              <List.Item.Meta
                avatar={<Avatar className="tsw-avatar" icon={item.icon} size="large" />}
                title={<Text className="tsw-list-title">{item.title}</Text>}
              />
            </List.Item>
          )}
        />
      </div>

      <div className="tsw-gallery">
        <div className="tsw-gallery-inner">
          {heroImages.map((image, index) => (
            <div key={index} className="tsw-gallery-tile">
              <Image src={image.src} alt={image.alt} className="tsw-gallery-img" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(STEMxWebinar);
