// src/components/Common/Navigation.jsx
import React from 'react';

const Navigation = ({ isMobile = false, activeItem = 'HOME' }) => {
  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SPACE OUTREACH', href: '/space-outreach' },
    { name: 'SPACE EDUCATION', href: '/space-education' },
    { name: 'CAPACITY BUILDING', href: '/capacity-building' },
    { name: 'RESOURCES', href: '/resources' }
  ];

  if (isMobile) {
    return (
      <>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            style={{
              display: 'block',
              padding: '12px 20px',
              color: item.name === activeItem ? '#F97316' : '#E5E7EB',
              textDecoration: 'none',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: item.name === activeItem ? '700' : '600',
              letterSpacing: '0.3px',
              backgroundColor: item.name === activeItem ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
              borderLeft: item.name === activeItem ? '3px solid #F97316' : 'none',
              margin: '2px 0',
              borderRadius: '0 4px 4px 0',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              if (item.name !== activeItem) {
                e.target.style.backgroundColor = 'rgba(75, 85, 99, 0.3)';
                e.target.style.color = 'white';
              }
            }}
            onMouseOut={(e) => {
              if (item.name !== activeItem) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#E5E7EB';
              }
            }}
          >
            {item.name}
          </a>
        ))}
      </>
    );
  }

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          style={{
            color: item.name === activeItem ? '#FFFFFF' : '#D1D5DB',
            textDecoration: 'none',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: '15px',
                          fontWeight: item.name === activeItem ? '700' : '600',
                          letterSpacing: '0.3px',
            borderBottom: item.name === activeItem ? '2px solid #F97316' : '2px solid transparent',
            paddingBottom: '4px',
            transition: 'all 0.3s ease',
            position: 'relative'
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
      ))}
    </>
  );
};

export default Navigation;