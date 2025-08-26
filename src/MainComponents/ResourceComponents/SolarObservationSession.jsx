import React from 'react';
import { Card, Row, Col, Button, Tooltip, Typography, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../../Styles/Resource.css';
import domain1 from '../../assets/images/domain1.svg';
import domain2 from '../../assets/images/domain1.svg';
import domain3 from '../../assets/images/domain1.svg';
const { Title, Paragraph, Text } = Typography;

const SolarObservationSession = () => {
  return (
    <>
      <Card className='resource-card'>
        <Title className='resource-main-title'>Solar Observation Session</Title>
        <Text className='resource-text'>Special solar observation events covered by various media outlets.</Text>
      </Card>
    </>
  );
};

export default React.memo(SolarObservationSession);
