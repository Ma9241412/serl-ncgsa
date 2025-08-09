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
      <Card
        style={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '20px' }}
        bodyStyle={{ padding: '24px', backgroundColor: '#2a2a2a', borderRadius: '20px' }}
      >
        <Title level={3} style={{ color: 'white', marginBottom: '8px', fontSize: '28px' }}>
          World Space Week 2020
        </Title>
        
        {/* Space Outreach Image Slider */}
        <div style={{ 
          backgroundColor: '#1a1a1aff', 
          borderRadius: '12px', 
          padding: '6px',
          marginBottom: '20px'
        }}>
          <Carousel 
            autoplay 
            autoplaySpeed={3000}
            dots={true}
            dotPosition="bottom"
            style={{ borderRadius: '8px', overflow: 'hidden' }}
          >
            {spaceOutreachImages.map((image, index) => (
              <div key={index}>
                <div style={{ 
                  height: '500px',
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '8px'
                }}>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        
        <Text style={{ color: '#cccccc', fontSize: '18px' }}>
          The 2020 Theme "Satellites Improve Life" Celebrates The Contribution Of Satellites To Human Development And Welfare. Learn How Satellites Help Us With Communication, Navigation, Weather Forecasting, Resource Management, And Disaster Response.
        </Text>
      </Card>

      {/* Activities Section */}
      <div>
        <Title level={2} style={{ color: 'white', marginBottom: '8px', fontSize: '32px' }}>
          Activities
        </Title>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: '#ff8c00',
          marginBottom: '24px'
        }}></div>
        <List
          dataSource={activities}
          renderItem={(item) => (
            <List.Item style={{ border: 'none', padding: '16px 0' }}>
              <List.Item.Meta
                avatar={
                  <Avatar 
                    icon={item.icon} 
                    style={{ backgroundColor: 'transparent', color: 'white', fontSize: '20px' }}
                    size="large"
                  />
                }
                title={
                  <Text style={{ color: 'white', fontSize: '20px', lineHeight: '1.5', fontWeight: '400' }}>
                    {item.title}
                  </Text>
                }
              />
            </List.Item>
          )}
        />
      </div>

      {/* Photo Gallery */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%',
        padding: '0 20px'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px',
          width: '95%',
          maxWidth: '1200px'
        }}>
          {heroImages.map((image, index) => (
            <div key={index} style={{ 
              width: 'calc(33.33% - 10px)',
              height: '450px', 
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <Image
                src={image.src}
                alt={image.alt}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
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
