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
      <Card
        style={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '20px' }}
        bodyStyle={{ padding: '24px', backgroundColor: '#2a2a2a', borderRadius: '20px' }}
      >
        <Title level={3} style={{ color: 'white', marginBottom: '8px', fontSize: '28px' }}>
          Lahore Science Mela
        </Title>

        <div style={{ backgroundColor: '#1a1a1aff', borderRadius: '12px', padding: '6px', marginBottom: '20px' }}>
          <Carousel autoplay autoplaySpeed={3000} dots dotPosition="bottom" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            {spaceOutreachImages.map((image, index) => (
              <div key={index}>
                <div style={{
                  height: '500px',
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '8px'
                }} />
              </div>
            ))}
          </Carousel>
        </div>

        <Text style={{ color: '#cccccc', fontSize: '18px' }}>
          Lahore Science Mela celebrates curiosity and learning by bringing together the wonders of science and technology for students, teachers, and the general public. The event features demonstrations, workshops, and engaging science stalls.
        </Text>
      </Card>

      <div>
        <Title level={2} style={{ color: 'white', marginBottom: '8px', fontSize: '32px' }}>
          Activities
        </Title>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#ff8c00', marginBottom: '24px' }} />
        <List
          dataSource={activities}
          renderItem={(item) => (
            <List.Item style={{ border: 'none', padding: '16px 0' }}>
              <List.Item.Meta
                avatar={<Avatar icon={item.icon} style={{ backgroundColor: 'transparent', color: 'white', fontSize: '20px' }} size="large" />}
                title={<Text style={{ color: 'white', fontSize: '20px', lineHeight: '1.5', fontWeight: '400' }}>{item.title}</Text>}
              />
            </List.Item>
          )}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', width: '95%', maxWidth: '1200px' }}>
          {heroImages.map((image, index) => (
            <div key={index} style={{ width: 'calc(33.33% - 10px)', height: '450px', borderRadius: '20px', overflow: 'hidden' }}>
              <Image src={image.src} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LahoreScienceMela;
