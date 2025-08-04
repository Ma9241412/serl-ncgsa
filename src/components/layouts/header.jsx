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
  const isMobile = !screens.lg; // Changed to lg (992px+) for better responsive behavior in 1200-1244px range
  const isTablet = screens.md && !screens.lg;
  const isSmallMobile = !screens.sm;

  // Load Google Fonts
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
        {/* Logo Section */}
        <Col flex="none">
          <Logo size={isSmallMobile ? 'small' : isMobile ? 'small' : 'default'} />
        </Col>

        {/* Desktop Navigation - Match reference image */}
        {!isMobile && (
          <>
            <Col flex="auto" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <a 
                  href="/" 
                  className={`header-nav-item ${activeNavItem === 'HOME' ? 'active' : ''}`}
                  style={{ 
                    color: activeNavItem === 'HOME' ? '#FFFFFF' : '#D1D5DB', 
                    textDecoration: 'none', 
                    fontFamily: 'Inter', 
                    fontSize: isTablet ? '14px' : '15px', 
                    fontWeight: activeNavItem === 'HOME' ? '700' : '600', 
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  HOME
                </a>
                <a 
                  href="/about" 
                  className={`header-nav-item ${activeNavItem === 'ABOUT' ? 'active' : ''}`}
                  style={{ 
                    color: activeNavItem === 'ABOUT' ? '#FFFFFF' : '#D1D5DB', 
                    textDecoration: 'none', 
                    fontFamily: 'Inter', 
                    fontSize: '15px', 
                    fontWeight: activeNavItem === 'ABOUT' ? '700' : '600', 
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  ABOUT
                </a>
                <a 
                  href="/space-outreach" 
                  className={`header-nav-item ${activeNavItem === 'SPACE OUTREACH' ? 'active' : ''}`}
                  style={{ 
                    color: activeNavItem === 'SPACE OUTREACH' ? '#FFFFFF' : '#D1D5DB', 
                    textDecoration: 'none', 
                    fontFamily: 'Inter', 
                    fontSize: '15px', 
                    fontWeight: activeNavItem === 'SPACE OUTREACH' ? '700' : '600', 
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  SPACE OUTREACH
                </a>
                <a 
                  href="/space-education" 
                  className={`header-nav-item ${activeNavItem === 'SPACE EDUCATION' ? 'active' : ''}`}
                  style={{ 
                    color: activeNavItem === 'SPACE EDUCATION' ? '#FFFFFF' : '#D1D5DB', 
                    textDecoration: 'none', 
                    fontFamily: 'Inter', 
                    fontSize: '15px', 
                    fontWeight: activeNavItem === 'SPACE EDUCATION' ? '700' : '600', 
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  SPACE EDUCATION
                </a>
                <a 
                  href="/capacity-building" 
                  className={`header-nav-item ${activeNavItem === 'CAPACITY BUILDING' ? 'active' : ''}`}
                  style={{ 
                    color: activeNavItem === 'CAPACITY BUILDING' ? '#FFFFFF' : '#D1D5DB', 
                    textDecoration: 'none', 
                    fontFamily: 'Inter', 
                    fontSize: '15px', 
                    fontWeight: activeNavItem === 'CAPACITY BUILDING' ? '700' : '600', 
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  CAPACITY BUILDING
                </a>
                <a 
                  href="/resources" 
                  className={`header-nav-item ${activeNavItem === 'RESOURCES' ? 'active' : ''}`}
                  style={{ 
                    color: activeNavItem === 'RESOURCES' ? '#FFFFFF' : '#D1D5DB', 
                    textDecoration: 'none', 
                    fontFamily: 'Inter', 
                    fontSize: '15px', 
                    fontWeight: activeNavItem === 'RESOURCES' ? '700' : '600', 
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  RESOURCES
                </a>
                <Button 
                  text="CONTACT US" 
                  variant="primary"
                  size={screens.xl ? "medium" : "small"}
                />
              </div>
            </Col>
          </>
        )}

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation Drawer */}
      <Drawer
        title={null}
        placement="top"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        height="auto"
        className="mobile-drawer"
        styles={{
          body: { 
            backgroundColor: '#111', 
            padding: 0,
            borderBottom: '2px solid #F97316'
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
        getContainer={false}
        zIndex={1001}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        }}
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
              Navigation Menu
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