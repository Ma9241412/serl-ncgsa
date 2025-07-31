import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Typography, Grid, Card } from 'antd';

const { Title } = Typography;
const { useBreakpoint } = Grid;

const StatsSection = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [isVisible, setIsVisible] = useState(true); // Set to true immediately
  const sectionRef = useRef(null);

  const stats = [
    { number: 200000, suffix: '+', label: 'Students Engaged' },
    { number: 100, suffix: '+', label: 'Universities Collaboration' },
    { number: 30, suffix: '+', label: 'International Participation' },
    { number: 1500, suffix: '+', label: 'Schools & Colleges Participation' },
    { number: 2, suffix: 'M+', label: 'Media Impression' }
  ];

  // Simple effect to trigger animation immediately
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animated Counter Component
  const AnimatedCounter = ({ targetNumber, suffix, display, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const startTime = Date.now();
      const endTime = startTime + duration;

      const updateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * targetNumber);
        
        setCount(currentCount);

        if (now < endTime) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(targetNumber);
        }
      };

      requestAnimationFrame(updateCounter);
    }, [isVisible, targetNumber, duration]);

    const formatNumber = (num) => {
      // Always show full number with commas, no abbreviations
      return num.toLocaleString();
    };

    return (
      <span>
        <span style={{ color: '#FFFFFF' }}>{formatNumber(count)}</span>
        <span style={{ color: '#FCD34D' }}>{suffix}</span>
      </span>
    );
  };

  return (
    <div 
      ref={sectionRef}
      style={{ 
        justifyContent:"center",
        display:"flex",
        background: 'linear-gradient(to bottom, #1a1a1a, #0a0a0a)',
        padding: isMobile ? '15px 10px' : '20px 20px' // Much shorter height
      }}
    >
      <Row 
        gutter={[16, 16]} 
        justify="space-between" // Even distribution like reference
        align="middle"
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          width: '100%'
        }}
      >
        {stats.map((stat, index) => (
          <Col 
            key={index}
            xs={12} 
            sm={12} 
            md={4}
            lg={4}
            xl={4}
            style={{ 
              textAlign: 'center',
              padding: isMobile ? '5px' : '8px' // Minimal padding for tight spacing
            }}
          >
         <Card
              bordered={false}
style={{
  background: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '12px',
  // padding: isMobile ? '10px' : '16px',
  width: isMobile ? '100px' : '200px',
  height: isMobile ? '100px' : '120px',
  textAlign: 'center',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  transition: 'all 0.3s ease',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  opacity: isVisible ? 1 : 0,
  transitionDelay: `${index * 100}ms`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}}


  bodyStyle={{ padding: "10px" }}
            >
              <Title
                level={2}
                style={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 'bold',
                  marginBottom: '6px',
                  color: '#fff',
                }}
              >
                <AnimatedCounter targetNumber={stat.number} suffix={stat.suffix} />
              </Title>
              <Title
                level={5}
                style={{
                  fontSize: isMobile ? '0.75rem' : '0.9rem',
                  fontWeight: 'normal',
                  color: '#D1D5DB',
                  margin: 0,
                }}
              >
                {stat.label}
              </Title>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StatsSection;
