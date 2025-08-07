// src/components/layouts/header.jsx
import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Drawer, Grid } from 'antd';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/logo';
import Navigation from '../common/navigation';
import Button from '../ui/button';

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const Header = ({ activeNavItem = 'HOME' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const isTablet = screens.md && !screens.lg;
  const isSmallMobile = !screens.sm;

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <AntHeader style={{ 
      backgroundColor: '#232121ff', 
      borderBottom: '1px solid #333',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: 0,
      height: 'auto',
      width: '100%'
    }}>
      <Row 
        justify="space-between" 
        align="middle"
        style={{ 
          height: isSmallMobile ? '70px' : isMobile ? '80px' : isTablet ? '90px' : '100px',
          width: '100%',
          margin: 0,
          padding: isSmallMobile ? '0 4px 0 2px' : isMobile ? '0 8px 0 2px' : isTablet ? '0 16px 0 2px' : '0 24px 0 2px'
        }}
      >
        <Col flex="none">
          <Logo size={isSmallMobile ? 'small' : isMobile ? 'small' : 'default'} />
        </Col>

        {!isMobile && (
          <Col flex="auto" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {['HOME', 'ABOUT', 'SPACE OUTREACH', 'SPACE EDUCATION', 'CAPACITY BUILDING', 'RESOURCES'].map((label) => (
                <a
                  key={label}
                  href={`/${label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`header-nav-item ${activeNavItem === label ? 'active' : ''}`}
                  style={{
                    color: activeNavItem === label ? '#FFFFFF' : '#D1D5DB',
                    textDecoration: 'none',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: activeNavItem === label ? '700' : '600',
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap',
                    borderBottom: activeNavItem === label ? '2px solid #F97316' : '2px solid transparent',
                    paddingBottom: '4px',
                    marginRight: '20px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {label}
                </a>
              ))}
              <Button 
                text="CONTACT US" 
                variant="primary"
                size={screens.xl ? "medium" : "small"}
              />
            </div>
          </Col>
        )}

        {isMobile && (
          <Col flex="none">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
                padding: '8px',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#1F2937';
                e.target.style.transform = 'scale(1.1)';
                e.target.style.color = '#F97316';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = isMenuOpen ? 'rotate(90deg)' : 'scale(1)';
                e.target.style.color = 'white';
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </Col>
        )}
      </Row>

      <Drawer
        title={null}
        placement="right"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        width={320}
        className="mobile-drawer"
        styles={{
          body: { 
            backgroundColor: '#111', 
            padding: 0,
            borderLeft: '2px solid #F97316'
          },
          header: { 
            display: 'none' 
          },
          mask: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }
        }}
        closeIcon={null}
        maskClosable={true}
        keyboard={true}
        destroyOnClose={false}
        forceRender={true}
        zIndex={1001}
      >
        <div style={{ 
          padding: '24px 20px',
          backgroundColor: '#111',
          minHeight: '250px',
          maxHeight: '400px',
          overflowY: 'auto'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              color: '#F97316', 
              margin: '0 0 16px 0', 
              fontSize: '18px',
              fontWeight: '700',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
            </h3>
            <Navigation activeItem={activeNavItem} isMobile={true} />
          </div>
          <div style={{ 
            marginTop: '24px',
            paddingTop: '16px',
            borderTop: '1px solid #333'
          }}>
            <Button 
              text="CONTACT US" 
              variant="primary"
              size="full"
              className="mobile-contact-button"
            />
          </div>
        </div>
      </Drawer>
    </AntHeader>
  );
};

export default Header;
