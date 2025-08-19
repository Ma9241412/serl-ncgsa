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

const LahoreScienceMela = () => {
  const heroImages = [
    { src: activity1, alt: 'Activity 1' },
    { src: activity2, alt: 'Activity 2' },
    { src: activity3, alt: 'Activity 3' }
  ];

  const spaceOutreachImages = [
    { src: spaceOutreach01, alt: 'Outreach 01' },
    { src: spaceOutreach03, alt: 'Outreach 03' },
    { src: spaceOutreach07, alt: 'Outreach 07' }
  ];

  const activities = [
    {
      title: 'Interactive science experiments for students and families',
      icon: <ExperimentOutlined />
    },
    {
      title: 'STEM-based activity booths with real-world applications',
      icon: <BookOutlined />
    },
    {
      title: 'Engaging talks and science shows by experts',
      icon: <ClockCircleOutlined />
    },
    {
      title: 'Astronomy sessions and telescope demonstrations',
      icon: <StarOutlined />
    }
  ];

  return (
    <>
      <Card className="soc-card">
        <Title level={3} className="soc-title-3">
          Lahore Science Mela
        </Title>

        <div className="soc-slider">
          <Carousel autoplay autoplaySpeed={3000} dots dotPosition="bottom" className="soc-carousel">
            {spaceOutreachImages.map((image, index) => (
              <div key={index}>
                <Image src={image.src} alt={image.alt} className="soc-slide-image" preview={false} />
              </div>
            ))}
          </Carousel>
        </div>

        <Text className="soc-text">
          Lahore Science Mela celebrates curiosity and learning by bringing together the wonders of science and technology for students, teachers, and the general public. The event features demonstrations, workshops, and engaging science stalls.
        </Text>
      </Card>

      <div>
        <Title level={2} className="soc-title-2">
          Activities
        </Title>
        <div className="soc-underline-small" />
        <List
          dataSource={activities}
          renderItem={(item) => (
            <List.Item className="soc-list-item">
              <List.Item.Meta
                avatar={<Avatar icon={item.icon} className="soc-avatar" size="large" />}
                title={<Text className="soc-item-title">{item.title}</Text>}
              />
            </List.Item>
          )}
        />
      </div>

      <div className="soc-gallery">
        {heroImages.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} className="soc-gallery-image" preview={false} />
        ))}
      </div>
    </>
  );
};

export default LahoreScienceMela;
