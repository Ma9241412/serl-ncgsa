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

const HigherEducationCommission = () => {
  // ...existing code...
  return (
    <>
      <Card style={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '20px' }} bodyStyle={{ padding: '24px', backgroundColor: '#2a2a2a', borderRadius: '20px' }}>
        <Title level={3} style={{ color: 'white', marginBottom: '8px', fontSize: '28px' }}>
          Higher Education Commission
        </Title>
        {/* ...existing code... */}
      </Card>
    </>
  );
};

export default HigherEducationCommission;
