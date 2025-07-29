// src/components/Layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/logo';
import Navigation from '../common/navigation';
import Button from '../ui/button';

const Header = ({ activeNavItem = 'HOME' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <header style={{ 
      backgroundColor: '#000', 
      borderBottom: '1px solid #333',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: isMobile ? '0 1rem' : '0 1.5rem'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: isMobile ? '90px' : '100px'
        }}>
          
          {/* Logo - Left Side */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0  // Prevents logo from shrinking
          }}>
            <Logo size={isMobile ? 'small' : 'default'} />
          </div>

          {/* Desktop Navigation + Button - Right Side */}
          {!isMobile && (
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem'  // More space specifically between RESOURCES and CONTACT US
            }}>
              {/* Navigation Items */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem'  // Less space between nav items
              }}>
                <Navigation activeItem={activeNavItem} />
              </div>
              
              {/* Contact Button */}
              <Button 
                text="CONTACT US" 
                variant="primary"
                size="medium"
              />
            </div>
          )}

          {/* Mobile menu button - Right Side */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                transition: 'background-color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1F2937'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <div style={{ 
            borderTop: '1px solid #333',
            marginTop: '0'
          }}>
            <nav style={{ 
              paddingTop: '1rem', 
              paddingBottom: '1rem',
              backgroundColor: '#111'
            }}>
              <Navigation activeItem={activeNavItem} isMobile={true} />
              <div style={{ padding: '1rem 0 0 0' }}>
                <Button 
                  text="CONTACT US" 
                  variant="primary"
                  size="full"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;