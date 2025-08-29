import React from 'react';
import { Typography, Card, Image, List, Avatar, Carousel } from 'antd';
import { ClockCircleOutlined, BookOutlined, ExperimentOutlined, StarOutlined } from '@ant-design/icons';
import activity1 from '../../../assets/images/activity1.png';
import activity2 from '../../../assets/images/activity2.png';
import activity3 from '../../../assets/images/activity3.png';
import spaceOutreach01 from '../../../assets/images/SpaceOutreach01.jpg';
import spaceOutreach03 from '../../../assets/images/SpaceOutreach03.jpg';
import spaceOutreach07 from '../../../assets/images/SpaceOutreach07.jpg';

const { Title, Text } = Typography;

const WorldSpaceWeek2020 = () => {
  const heroImages = [
    { src: activity1, alt: 'World Space Week Activity 1' },
    { src: activity2, alt: 'World Space Week Activity 2' },
    { src: activity3, alt: 'World Space Week Activity 3' }
  ];

  const spaceOutreachImages = [
    { src: spaceOutreach01, alt: 'Space Outreach 01' },
    { src: spaceOutreach03, alt: 'Space Outreach 03' },
    { src: spaceOutreach07, alt: 'Space Outreach 07' }
  ];

  const activities = [
    {
      title: 'Public Lectures And Seminars Featuring Leading Space Scientists And Researchers',
      icon: <ClockCircleOutlined />
    },
    {
      title: 'School Competitions And Activities Designed To Engage Students With Space Science',
      icon: <BookOutlined />
    },
    {
      title: 'Astronomy Observation Sessions With Professional Telescopes And Expert Guidance',
      icon: <StarOutlined />
    },
    {
      title: 'Workshops And Hands-On Activities Exploring Space Technology And Principles',
      icon: <ExperimentOutlined />
    }
  ];

  return (
    <>
      {/* World Space Week 2020 Section */}
      <Card className="wsw-card">
        <Title className="wsw-title">
          World Space Week 2020
        </Title>
        {/* Space Outreach Image Slider */}
        <div className="wsw-slider-wrapper">
          <Carousel 
            autoplay 
            autoplaySpeed={3000}
            dots={true}
            dotPosition="bottom"
            className="wsw-carousel"
          >
            {spaceOutreachImages.map((image, index) => (
              <div key={index}>
                <div className="wsw-slider-img" style={{ backgroundImage: `url(${image.src})` }}></div>
              </div>
            ))}
          </Carousel>
        </div>
        <Text className="wsw-desc">
          The 2020 Theme "Satellites Improve Life" Celebrates The Contribution Of Satellites To Human Development And Welfare. Learn How Satellites Help Us With Communication, Navigation, Weather Forecasting, Resource Management, And Disaster Response.
        </Text>
      </Card>

      {/* Activities Section */}
        <Title className="wsw-activities-title">
          Activities
        </Title>
        <div className="wsw-activities-underline"></div>
        <List
          dataSource={activities}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar 
                    icon={item.icon} 
                    className="wsw-activity-avatar"
                    size="large"
                  />
                }
                title={
                  <Text className="wsw-activity-title">
                    {item.title}
                  </Text>
                }
              />
            </List.Item>
          )}
        />

      {/* Photo Gallery */}
      <div className="wsw-gallery-wrapper">
        <div className="wsw-gallery">
          {heroImages.map((image, index) => (
            <div key={index} className="wsw-gallery-img-wrapper">
              <Image
                src={image.src}
                alt={image.alt}
                className="wsw-gallery-img"
                fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorldSpaceWeek2020;
