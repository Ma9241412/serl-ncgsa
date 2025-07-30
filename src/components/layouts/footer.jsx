import React from 'react';
import { Layout, Row, Col, Divider, Grid, Typography } from 'antd';
import SocialIcons from '../ui/social_icons';
import Logo from '../ui/logo';

const { Footer: AntFooter } = Layout;
const { useBreakpoint } = Grid;
const { Title, Text } = Typography;

const Footer = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const isTablet = screens.md && !screens.lg;

  return (
    <AntFooter style={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      padding: isMobile ? '32px 0' : '40px 0'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isMobile ? '0 16px' : '0 24px'
      }}>
        <div style={{
          backgroundColor: '#0a0a0a',
          borderRadius: '20px',
          padding: isMobile ? '24px' : '40px',
          marginBottom: isMobile ? '40px' : '80px'
        }}>
          
          {/* Top section with SERL info */}
          <Row gutter={[24, 32]} style={{ marginBottom: isMobile ? '32px' : '40px' }}>
            <Col xs={24} md={24} lg={10}>
              <Title level={3} style={{ 
                color: 'white',
                fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
                fontWeight: '700', 
                marginBottom: '16px',
                fontFamily: 'Inter',
                lineHeight: '1.2'
              }}>
                <span style={{ color: '#60A5FA' }}>Space</span>{' '}
                <span style={{ color: '#F97316' }}>Education</span>{' '}
                <span style={{ color: '#60A5FA' }}>Research</span>{' '}
                <span style={{ color: '#E5E7EB' }}>Lab</span>
              </Title>
              
              <Text style={{ 
                color: '#D1D5DB', 
                fontSize: isTablet ? '14px' : '13px', 
                lineHeight: '1.5', 
                display: 'block',
                marginBottom: '24px',
                fontFamily: 'Inter',
                fontWeight: '400'
              }}>
                A component of National Center of GIS and Space Applications for the Awareness, Education, Outreach and Popularization of Space Science, Technology & its Applications
              </Text>
              
              <SocialIcons variant="footer-top" />
            </Col>

            {/* Contact & Explore sections */}
            <Col xs={24} md={24} lg={14}>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12} lg={12}>
                  <Title level={4} style={{ 
                    color: 'white', 
                    fontWeight: '700', 
                    fontSize: '16px', 
                    marginBottom: '8px',
                    fontFamily: 'Inter'
                  }}>
                    Contact Us
                  </Title>
                  <div style={{
                    width: '50px',
                    height: '3px',
                    backgroundColor: '#F59E0B',
                    marginBottom: '16px'
                  }}></div>
                  
                  <div style={{ 
                    fontSize: isTablet ? '14px' : '13px', 
                    color: '#D1D5DB', 
                    lineHeight: '1.6',
                    fontFamily: 'Inter',
                    fontWeight: '400'
                  }}>
                    <Text style={{ display: 'block', margin: '0 0 6px 0', color: '#D1D5DB' }}>
                      serl.ncgsa@gmail.com
                    </Text>
                    <Text style={{ display: 'block', margin: '0 0 6px 0', color: '#D1D5DB' }}>
                      +92-51-907-5864 | 5799
                    </Text>
                    <Text style={{ display: 'block', margin: '0 0 6px 0', color: '#D1D5DB' }}>
                      +92-334-2949667
                    </Text>
                  </div>
                </Col>

                <Col xs={24} md={12} lg={12}>
                  <Title level={4} style={{ 
                    color: 'white', 
                    fontWeight: '700', 
                    fontSize: '16px', 
                    marginBottom: '8px',
                    fontFamily: 'Inter'
                  }}>
                    Explore
                  </Title>
                  <div style={{
                    width: '50px',
                    height: '3px',
                    backgroundColor: '#F59E0B',
                    marginBottom: '16px'
                  }}></div>
                  
                  <div style={{ 
                    fontSize: isTablet ? '14px' : '13px', 
                    color: '#D1D5DB', 
                    lineHeight: '1.6',
                    fontFamily: 'Inter',
                    fontWeight: '400'
                  }}>
                    {['SERL', 'Space Outreach', 'Space Education', 'Capacity Building', 'Resources'].map((item) => (
                      <Text key={item} style={{ 
                        display: 'block', 
                        margin: '0 0 6px 0', 
                        cursor: 'pointer',
                        color: '#D1D5DB',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#F59E0B'}
                      onMouseLeave={(e) => e.target.style.color = '#D1D5DB'}>
                        {item}
                      </Text>
                    ))}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Divider style={{ backgroundColor: '#333', margin: isMobile ? '24px 0' : '24px 0' }} />

          {/* Bottom section with NCGSA info */}
          <Row gutter={[24, 32]} align="top">
            <Col xs={24} md={24} lg={10}>
              <Row gutter={16} align="middle">
                <Col flex="none">
                  <Logo variant="ncgsa" size="ncgsa" />
                </Col>
                <Col flex="auto">
                  <Title level={4} style={{ 
                    color: 'white', 
                    fontWeight: '600', 
                    fontSize: '16px', 
                    marginBottom: '4px',
                    fontFamily: 'Inter',
                    lineHeight: '1.3'
                  }}>
                    National Center of GIS & Space Applications
                  </Title>
                  <Text style={{ 
                    color: '#D1D5DB', 
                    fontSize: isTablet ? '14px' : '13px', 
                    display: 'block',
                    margin: '2px 0',
                    fontFamily: 'Inter'
                  }}>
                    Institute of Space Technology
                  </Text>
                  <Text style={{ 
                    color: '#D1D5DB', 
                    fontSize: isTablet ? '14px' : '13px', 
                    display: 'block',
                    margin: '2px 0',
                    fontFamily: 'Inter'
                  }}>
                    Islamabad, Pakistan
                  </Text>
                </Col>
              </Row>
            </Col>

            <Col xs={24} md={24} lg={14}>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12} lg={12}>
                  <Title level={4} style={{ 
                    color: 'white', 
                    fontWeight: '700', 
                    fontSize: '16px', 
                    marginBottom: '8px',
                    fontFamily: 'Inter'
                  }}>
                    Contact Us
                  </Title>
                  <div style={{
                    width: '50px',
                    height: '3px',
                    backgroundColor: '#F59E0B',
                    marginBottom: '16px'
                  }}></div>
                  
                  <div style={{ 
                    fontSize: isTablet ? '14px' : '13px', 
                    color: '#D1D5DB', 
                    lineHeight: '1.6',
                    fontFamily: 'Inter',
                    fontWeight: '400'
                  }}>
                    <Text style={{ display: 'block', margin: '0 0 6px 0', color: '#D1D5DB' }}>
                      +92-51-907-5799
                    </Text>
                    <Text style={{ display: 'block', margin: '0 0 6px 0', color: '#D1D5DB' }}>
                      +92-51-907-5578
                    </Text>
                    <Text style={{ display: 'block', margin: '0 0 6px 0', color: '#D1D5DB' }}>
                      ncgsa@ist.edu.pk
                    </Text>
                  </div>
                </Col>

                <Col xs={24} md={12} lg={12}>
                  <Title level={4} style={{ 
                    color: 'white', 
                    fontWeight: '700', 
                    fontSize: '16px', 
                    marginBottom: '8px',
                    fontFamily: 'Inter'
                  }}>
                    Follow Us
                  </Title>
                  <div style={{
                    width: '50px',
                    height: '3px',
                    backgroundColor: '#F59E0B',
                    marginBottom: '16px'
                  }}></div>
                  
                  <SocialIcons variant="footer-follow" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ 
        borderTop: '1px solid #333',
        paddingTop: '16px',
        backgroundColor: '#1a1a1a'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0 16px' : '0 24px'
        }}>
          <Text style={{ 
            display: 'block',
            textAlign: 'center', 
            fontSize: '13px', 
            color: '#9CA3AF',
            fontFamily: 'Inter',
            fontWeight: '400',
            margin: 0
          }}>
            © 2025 — Higher Education Commission of Pakistan
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;