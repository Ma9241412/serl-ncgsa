import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { 
  TeamOutlined, 
  BankOutlined, 
  GlobalOutlined, 
  TrophyOutlined, 
  EyeOutlined 
} from '@ant-design/icons';
import '../../Styles/CapacityBuilding.css';

const { Title } = Typography;

const stats = [
  { number: 15, suffix: '+', label: 'Programs', icon: TeamOutlined, color: '#FFFFFF' },
  { number: 2000, suffix: '+', label: 'Students', icon: BankOutlined, color: '#FFFFFF' },
  { number: 8, suffix: '+', label: 'Experience', icon: GlobalOutlined, color: '#FFFFFF' },
  { number: 15, suffix: '+', label: 'Workshops', icon: TrophyOutlined, color: '#FFFFFF' },
  { number: 15, suffix: '+', label: 'Programs', icon: EyeOutlined, color: '#FFFFFF' }
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          stats.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedStats(prev => [...prev, index]);
            }, index * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  const AnimatedCounter = ({ targetNumber, suffix, isActive, duration = 2500 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!isActive) return;
      const startTime = Date.now();
      const endTime = startTime + duration;
      const updateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutBounce = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        const currentCount = Math.floor(easeOutBounce * targetNumber);
        setCount(currentCount);
        if (now < endTime) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(targetNumber);
        }
      };
      const timer = setTimeout(() => {
        requestAnimationFrame(updateCounter);
      }, 300);
      return () => clearTimeout(timer);
    }, [isActive, targetNumber, duration]);
    const formatNumber = (num) => num.toLocaleString();
    return (
      <span className="stats-count">
        <span className="stats-count-number">{formatNumber(count)}</span>
        <span className="stats-count-suffix">{suffix}</span>
      </span>
    );
  };

  return (
    <Card ref={sectionRef} bordered={false} className="stats-section-wrapper">
      <Row 
        className="stats-cont" 
        gutter={[24, 24]} 
        justify="center"
        align="middle"
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          const isStatVisible = animatedStats.includes(index);
          return (
            <Col 
              key={index}
              xs={24} 
              sm={12} 
              md={8}
              lg={4}
              xl={4}
              className="stats-item-col"
            >
              <Card bordered={false} className={`stats-card ${isStatVisible ? 'visible' : ''}`}>
                <div className={`stats-icon ${isStatVisible ? 'visible' : ''} delay-${index}`}>
                  <IconComponent />
                </div>
                <Title level={2} className="stats-count-title">
                  <AnimatedCounter 
                    targetNumber={stat.number} 
                    suffix={stat.suffix}
                    isActive={isStatVisible}
                  />
                </Title>
                <Title level={5} className="stats-label-title">
                  {stat.label}
                </Title>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default StatsSection;
