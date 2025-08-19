import React from 'react';
import { Typography, Card, Image, List, Avatar } from 'antd';
import '../../../Styles/SpaceOutreach.css';
import { ClockCircleOutlined, BookOutlined, ExperimentOutlined, StarOutlined } from '@ant-design/icons';
import activity1 from '../../../assets/images/activity1.png';
import activity2 from '../../../assets/images/activity2.png';
import activity3 from '../../../assets/images/activity3.png';

const { Title, Text } = Typography;

const WorldSpaceWeek2024 = () => {
  const heroImages = [
    { src: activity1, alt: 'World Space Week Activity 1' },
    { src: activity2, alt: 'World Space Week Activity 2' },
    { src: activity3, alt: 'World Space Week Activity 3' }
  ];

  const activities = [
    {
      title: 'Public Lectures, Expert Panels, And Workshops On Climate Monitoring Using Satellites',
      icon: <ClockCircleOutlined />
    },
    {
      title: 'Contests Like "Best Space School" And "Space Ambassador" Focused On Climate-Related Space Solutions',
      icon: <BookOutlined />
    },
    {
      title: 'Creative Events Such As "SAT From Trash" And Environmental Cartoon Competitions For Kids And Teens',
      icon: <StarOutlined />
    },
    {
      title: 'STEM-Based Hands-On Activities In Schools And Colleges, Building Earth-Observation Models, Mapping Climate Data',
      icon: <ExperimentOutlined />
    }
  ];

  return (
    <>
      {/* World Space Week 2024 Section */}
      <Card className="soc-card">
        <Title level={3} className="soc-title-3">
          World Space Week 2024
        </Title>
        
        {/* YouTube Video for 2024 */}
        <div className="soc-slider">
          <Card className="soc-video-card" loading={false}>
            <div className="soc-iframe-wrap">
              <iframe
                src="https://www.youtube.com/embed/4hZC0L99WUc?rel=0"
                title="World Space Week 2024 - Space and Climate Change"
                className="soc-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Card>
        </div>
        
        <Text className="soc-text">
          The 2024 Theme "Space and Climate Change" Focuses On How Space Technology Helps Monitor And Address Climate Change. Exploring Satellite-Based Solutions For Environmental Protection And Climate Data Collection.
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

export default WorldSpaceWeek2024;
