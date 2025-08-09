import React from 'react';
import { Row, Col, Menu, Grid } from 'antd';

const { useBreakpoint } = Grid;

const Navigation = ({ isMobile = false, activeItem = 'HOME' }) => {
  const screens = useBreakpoint();
  const isLargeScreen = screens.xl;
  
  const navItems = [
    { name: 'HOME', href: '/', key: 'home' },
    { name: 'ABOUT', href: '/about', key: 'about' },
    { name: 'SPACE OUTREACH', href: '/space-outreach', key: 'space-outreach' },
    { name: 'SPACE EDUCATION', href: '/space-education', key: 'space-education' },
    { name: 'CAPACITY BUILDING', href: '/capacity-building', key: 'capacity-building' },
    { name: 'RESOURCES', href: '/resources', key: 'resources' }
  ];

  if (isMobile) {
    return (
      <Menu
        mode="vertical"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '16px',
          fontFamily: 'Inter'
        }}
        selectedKeys={[activeItem.toLowerCase().replace(' ', '-')]}
        items={navItems.map((item) => ({
          key: item.key,
          label: (
            <a
              href={item.href}
              style={{
                color: item.name === activeItem ? '#F97316' : '#E5E7EB',
                textDecoration: 'none',
                fontWeight: item.name === activeItem ? '700' : '600',
                letterSpacing: '0.3px',
                display: 'block',
                padding: '8px 16px',
                borderLeft: item.name === activeItem ? '3px solid #F97316' : 'none',
                borderRadius: '0 4px 4px 0',
                backgroundColor: item.name === activeItem ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                transition: 'all 0.2s ease'
              }}
            >
              {item.name}
            </a>
          )
        }))}
      />
    );
  }

  return (
    <Row gutter={isLargeScreen ? 60 : 36} align="middle">
      {navItems.map((item) => (
        <Col key={item.key}>
          <a
            href={item.href}
            style={{
              color: item.name === activeItem ? '#FFFFFF' : '#D1D5DB',
              textDecoration: 'none',
              fontFamily: 'Inter',
              fontSize: isLargeScreen ? '15px' : '14px',
              fontWeight: item.name === activeItem ? '700' : '600',
              letterSpacing: '0.3px',
              borderBottom: item.name === activeItem ? '2px solid #F97316' : '2px solid transparent',
              paddingBottom: '4px',
              transition: 'all 0.3s ease',
              position: 'relative',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              if (item.name !== activeItem) {
                e.target.style.color = '#FFFFFF';
                e.target.style.borderBottomColor = '#F59E0B';
              }
            }}
            onMouseOut={(e) => {
              if (item.name !== activeItem) {
                e.target.style.color = '#D1D5DB';
                e.target.style.borderBottomColor = 'transparent';
              }
            }}
          >
            {item.name}
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default Navigation;