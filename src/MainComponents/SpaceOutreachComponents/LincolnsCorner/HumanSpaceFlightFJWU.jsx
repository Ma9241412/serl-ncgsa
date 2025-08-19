import React from 'react';
import { Typography, Card, Image, List, Avatar, Carousel } from 'antd';
import '../../../Styles/SpaceOutreach.css';
import { ClockCircleOutlined, BookOutlined, ExperimentOutlined, StarOutlined } from '@ant-design/icons';
import activity1 from '../../../assets/images/activity1.png';
import activity2 from '../../../assets/images/activity2.png';
import activity3 from '../../../assets/images/activity3.png';
import spaceOutreach01 from '../../../assets/images/SpaceOutreach01.jpg';
import spaceOutreach03 from '../../../assets/images/SpaceOutreach03.jpg';
import spaceOutreach07 from '../../../assets/images/SpaceOutreach07.jpg';

const { Title, Text } = Typography;

const HumanSpaceFlightFJWU = () => {
  const heroImages = [
    { src: activity1, alt: 'Human Spaceflight FJWU Activity 1' },
    { src: activity2, alt: 'Human Spaceflight FJWU Activity 2' },
    { src: activity3, alt: 'Human Spaceflight FJWU Activity 3' }
  ];

  const spaceOutreachImages = [
    { src: spaceOutreach01, alt: 'Space Outreach 01' },
    { src: spaceOutreach03, alt: 'Space Outreach 03' },
    { src: spaceOutreach07, alt: 'Space Outreach 07' }
  ];

  const activities = [
    {
      title: 'Interactive Lectures On Human Spaceflight History And Future Missions',
      icon: <ClockCircleOutlined />
    },
    {
      title: 'Workshops On Space Medicine And Life Support Systems For Human Missions',
      icon: <BookOutlined />
    },
    {
      title: 'Student Research Projects On Human Factors In Space Exploration',
      icon: <StarOutlined />
    },
    {
      title: 'Career Guidance Sessions For Women In Aerospace Engineering',
      icon: <ExperimentOutlined />
    }
  ];

  return (
    <>
      {/* Human Spaceflight FJWU Section */}
      <Card className="soc-card">
        <Title level={3} className="soc-title-3">
          Human Spaceflight at FJWU
        </Title>
        
        {/* Space Outreach Image Slider */}
        <div className="soc-slider">
          <Carousel 
            autoplay 
            autoplaySpeed={3000}
            dots={true}
            dotPosition="bottom"
            className="soc-carousel"
          >
            {spaceOutreachImages.map((image, index) => (
              <div key={index}>
                <Image src={image.src} alt={image.alt} className="soc-slide-image" preview={false} />
              </div>
            ))}
          </Carousel>
        </div>
        
        <Text className="soc-text">
          SERL's collaboration with Fatima Jinnah Women University (FJWU) focuses on human spaceflight education and research, inspiring female students to pursue careers in aerospace engineering and space sciences.
        </Text>
      </Card>

      {/* Activities Section */}
      <div>
        <Title level={2} className="soc-title-2">
          Activities
        </Title>
        <div className="soc-underline-small"></div>
        <List
          dataSource={activities}
          renderItem={(item) => (
            <List.Item className="soc-list-item">
              <List.Item.Meta
                avatar={
                  <Avatar icon={item.icon} className="soc-avatar" size="large" />
                }
                title={
                  <Text className="soc-item-title">
                    {item.title}
                  </Text>
                }
              />
            </List.Item>
          )}
        />
      </div>

      {/* Photo Gallery */}
      <div className="soc-gallery">
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className="soc-gallery-image"
            preview={false}
            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
          />
        ))}
      </div>
    </>
  );
};

export default HumanSpaceFlightFJWU;
