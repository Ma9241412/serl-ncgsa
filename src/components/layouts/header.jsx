// src/components/layouts/header.jsx
import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Drawer, Grid } from 'antd';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/logo';
import Button from '../ui/button';

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const Header = ({ activeNavItem = 'HOME' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.xl; // Mobile menu below 1200px

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
      backgroundColor: '#000', 
      borderBottom: '1px solid #333',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: 0,
      height: isMobile ? '80px' : '100px',
      width: '100%'
    }}>
      <Row justify="space-between" align="middle" style={{ 
        height: isMobile ? '80px' : '100px',
        width: '100%',
        margin: 0,
        padding: isMobile ? '0 8px 0 2px' : '0 24px 0 2px'
      }}>
        <Col flex="none">
          <Logo size={isMobile ? 'small' : 'default'} />
        </Col>

        {/* Desktop navigation */}
        {!isMobile && (
          <Col flex="auto" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="/" className={`header-nav-item ${activeNavItem === 'HOME' ? 'active' : ''}`}
                style={{ 
                  color: activeNavItem === 'HOME' ? '#FFFFFF' : '#D1D5DB', 
                  textDecoration: 'none', 
                  fontFamily: 'Inter', 
                  fontSize: '15px', 
                  fontWeight: activeNavItem === 'HOME' ? '700' : '600', 
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap'
                }}>
                HOME
              </a>
              <a href="/about" className={`header-nav-item ${activeNavItem === 'ABOUT' ? 'active' : ''}`}
                style={{ 
                  color: activeNavItem === 'ABOUT' ? '#FFFFFF' : '#D1D5DB', 
                  textDecoration: 'none', 
                  fontFamily: 'Inter', 
                  fontSize: '15px', 
                  fontWeight: activeNavItem === 'ABOUT' ? '700' : '600', 
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap'
                }}>
                ABOUT
              </a>
              <a href="/space-outreach" className={`header-nav-item ${activeNavItem === 'SPACE OUTREACH' ? 'active' : ''}`}
                style={{ 
                  color: activeNavItem === 'SPACE OUTREACH' ? '#FFFFFF' : '#D1D5DB', 
                  textDecoration: 'none', 
                  fontFamily: 'Inter', 
                  fontSize: '15px', 
                  fontWeight: activeNavItem === 'SPACE OUTREACH' ? '700' : '600', 
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap'
                }}>
                SPACE OUTREACH
              </a>
              <a href="/space-education" className={`header-nav-item ${activeNavItem === 'SPACE EDUCATION' ? 'active' : ''}`}
                style={{ 
                  color: activeNavItem === 'SPACE EDUCATION' ? '#FFFFFF' : '#D1D5DB', 
                  textDecoration: 'none', 
                  fontFamily: 'Inter', 
                  fontSize: '15px', 
                  fontWeight: activeNavItem === 'SPACE EDUCATION' ? '700' : '600', 
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap'
                }}>
                SPACE EDUCATION
              </a>
              <a href="/capacity-building" className={`header-nav-item ${activeNavItem === 'CAPACITY BUILDING' ? 'active' : ''}`}
                style={{ 
                  color: activeNavItem === 'CAPACITY BUILDING' ? '#FFFFFF' : '#D1D5DB', 
                  textDecoration: 'none', 
                  fontFamily: 'Inter', 
                  fontSize: '15px', 
                  fontWeight: activeNavItem === 'CAPACITY BUILDING' ? '700' : '600', 
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap'
                }}>
                CAPACITY BUILDING
              </a>
              <a href="/resources" className={`header-nav-item ${activeNavItem === 'RESOURCES' ? 'active' : ''}`}
                style={{ 
                  color: activeNavItem === 'RESOURCES' ? '#FFFFFF' : '#D1D5DB', 
                  textDecoration: 'none', 
                  fontFamily: 'Inter', 
                  fontSize: '15px', 
                  fontWeight: activeNavItem === 'RESOURCES' ? '700' : '600', 
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap'
                }}>
                RESOURCES
              </a>
              <Button text="CONTACT US" variant="primary" size={!isMobile ? "medium" : "small"} />
            </div>
          </Col>
        )}

        {/* Mobile hamburger button */}
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
              aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </Col>
        )}
      </Row>

      {/* Mobile menu drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsMenuOpen(false)}
        open={isMobile && isMenuOpen}
        width={300}
        className="mobile-drawer"
        styles={{
          body: { backgroundColor: '#111', padding: '20px' },
          header: { backgroundColor: '#111', borderBottom: '1px solid #333', color: '#F97316' }
        }}>
        <div style={{ backgroundColor: '#111', minHeight: '100%' }}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'HOME', href: '/' },
                { name: 'ABOUT', href: '/about' },
                { name: 'SPACE OUTREACH', href: '/space-outreach' },
                { name: 'SPACE EDUCATION', href: '/space-education' },
                { name: 'CAPACITY BUILDING', href: '/capacity-building' },
                { name: 'RESOURCES', href: '/resources' }
              ].map((item) => (
                <a key={item.name} href={item.href}
                  style={{
                    color: activeNavItem === item.name ? '#F97316' : '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: activeNavItem === item.name ? '700' : '600',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    backgroundColor: activeNavItem === item.name ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                    borderLeft: activeNavItem === item.name ? '3px solid #F97316' : 'none',
                    fontFamily: 'Inter'
                  }}
                  onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid #333' }}>
            <Button text="CONTACT US" variant="primary" size="full" style={{ width: '100%' }} />
          </div>
        </div>
      </Drawer>
    </AntHeader>
  );
};

export default Header;