import React from 'react';
import { Typography, Card, Image, List, Avatar } from 'antd';
import { ClockCircleOutlined, BookOutlined, ExperimentOutlined, StarOutlined } from '@ant-design/icons';
import activity1 from '../../../assets/images/activity1.png';
import activity2 from '../../../assets/images/activity2.png';
import activity3 from '../../../assets/images/activity3.png';

const { Title, Text } = Typography;

const WorldSpaceWeek2023 = () => {
  const heroImages = [
    { src: activity1, alt: 'World Space Week Activity 1' },
    { src: activity2, alt: 'World Space Week Activity 2' },
    { src: activity3, alt: 'World Space Week Activity 3' }
  ];

  const activities = [
    {
      title: 'Panel Discussions With Space Entrepreneurs And Industry Leaders',
      icon: <ClockCircleOutlined />
    },
    {
      title: 'Startup Pitch Competitions And Business Challenges For Students',
      icon: <BookOutlined />
    },
    {
      title: 'Demonstrations Of Entrepreneurial Solutions In Space Science',
      icon: <StarOutlined />
    },
    {
      title: 'Innovation Labs And Hands-On Activities Showcasing Startup Projects In Space',
      icon: <ExperimentOutlined />
    }
  ];

  return (
    <>
      {/* World Space Week 2023 Section */}
      <Card
        style={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '20px' }}
        bodyStyle={{ padding: '24px', backgroundColor: '#2a2a2a', borderRadius: '20px' }}
      >
        <Title level={3} style={{ color: 'white', marginBottom: '8px', fontSize: '28px' }}>
          World Space Week 2023
        </Title>
        
        {/* YouTube Video for 2023 */}
        <div style={{ 
          backgroundColor: '#1a1a1aff', 
          borderRadius: '12px', 
          padding: '6px',
          marginBottom: '20px'
        }}>
          <Card
            style={{ 
              backgroundColor: 'transparent',
              border: 'none'
            }}
            bodyStyle={{ 
              padding: 0,
              borderRadius: '8px',
              overflow: 'hidden'
            }}
            loading={false}
          >
            <div style={{ 
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              borderRadius: '8px',
              backgroundColor: '#000'
            }}>
              <iframe
                src="https://www.youtube.com/embed/9b1VAyAFmXc?enablejsapi=1&origin=window.location.protocol + '//' + window.location.hostname"
                title="World Space Week 2023 - Space and Entrepreneurship"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '8px'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Card>
        </div>
        
        <Text style={{ color: '#cccccc', fontSize: '18px' }}>
          The 2023 Theme "Space and Entrepreneurship" Highlights The Growing Commercial Space Industry And Innovation. Showcasing How Private Companies Are Advancing Space Exploration And Making Space More Accessible.
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

export default WorldSpaceWeek2023;
