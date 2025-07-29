// src/components/Layout/Footer.jsx
import React from 'react';
import SocialIcons from '../ui/social_icons';
import Logo from '../ui/logo';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '2rem 0' }}>
      {/* Main Footer Content */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1.5rem'
      }}>
        {/* Single Curved Rectangle Container */}
        <div style={{
          backgroundColor: '#0a0a0a',
          borderRadius: '20px',
          padding: '2.5rem',
          marginBottom: '5rem'
        }}>
          
          {/* Top Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '2fr 1fr 1fr' : '1fr', 
            gap: '3rem',
            marginBottom: '2.5rem'
          }}>
            
            {/* Left Section - Organization Info */}
            <div>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                lineHeight: '1.2'
              }}>
                <span style={{ color: '#60A5FA' }}>Space</span>{' '}
                <span style={{ color: '#F97316' }}>Education</span>{' '}
                <span style={{ color: '#60A5FA' }}>Research</span>{' '}
                <span style={{ color: '#E5E7EB' }}>Lab</span>
              </h3>
              
              <p style={{ 
                color: '#D1D5DB', 
                fontSize: '13px', 
                lineHeight: '1.5', 
                marginBottom: '1.5rem',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: '400'
              }}>
                A component of National Center of GIS and Space Applications for the Awareness, Education, Outreach and Popularization of Space Science, Technology & its Applications
              </p>
              
              {/* Social Media Icons - Using SocialIcons component */}
              <SocialIcons variant="footer-top" />
            </div>

            {/* Middle Section - Contact Us */}
            <div>
              <h4 style={{ 
                color: 'white', 
                fontWeight: '700', 
                fontSize: '16px', 
                marginBottom: '0.3rem',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                Contact Us
              </h4>
              <div style={{
                width: '50px',
                height: '3px',
                backgroundColor: '#F59E0B',
                marginBottom: '1rem'
              }}></div>
              
              <div style={{ 
                fontSize: '13px', 
                color: '#D1D5DB', 
                lineHeight: '1.6',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: '400'
              }}>
                <p style={{ margin: '0 0 6px 0' }}>serl.ncgsa@gmail.com</p>
                <p style={{ margin: '0 0 6px 0' }}>+92-51-907-5864 | 5799</p>
                <p style={{ margin: '0 0 6px 0' }}>+92-334-2949667</p>
              </div>
            </div>

            {/* Right Section - Explore */}
            <div>
              <h4 style={{ 
                color: 'white', 
                fontWeight: '700', 
                fontSize: '16px', 
                marginBottom: '0.3rem',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                Explore
              </h4>
              <div style={{
                width: '50px',
                height: '3px',
                backgroundColor: '#F59E0B',
                marginBottom: '1rem'
              }}></div>
              
              <div style={{ 
                fontSize: '13px', 
                color: '#D1D5DB', 
                lineHeight: '1.6',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: '400'
              }}>
                <p style={{ margin: '0 0 6px 0', cursor: 'pointer' }}>SERL</p>
                <p style={{ margin: '0 0 6px 0', cursor: 'pointer' }}>Space Outreach</p>
                <p style={{ margin: '0 0 6px 0', cursor: 'pointer' }}>Space Education</p>
                <p style={{ margin: '0 0 6px 0', cursor: 'pointer' }}>Capacity Building</p>
                <p style={{ margin: '0 0 6px 0', cursor: 'pointer' }}>Resources</p>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#333',
            margin: '1.5rem 0'
          }}></div>

          {/* Bottom Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '2fr 1fr 1fr' : '1fr', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            
            {/* Left Section - NCGSA */}
            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              alignItems: 'center'
            }}>
              {/* NCGSA Logo using Logo component */}
              <Logo variant="ncgsa" size="ncgsa" />
              <div>
                <h4 style={{ 
                  color: 'white', 
                  fontWeight: '600', 
                  fontSize: '16px', 
                  marginBottom: '4px',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  lineHeight: '1.3'
                }}>
                  National Center of GIS & Space Applications
                </h4>
                <p style={{ 
                  color: '#D1D5DB', 
                  fontSize: '13px', 
                  margin: '2px 0',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                  Institute of Space Technology
                </p>
                <p style={{ 
                  color: '#D1D5DB', 
                  fontSize: '13px', 
                  margin: '2px 0',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                  Islamabad, Pakistan
                </p>
              </div>
            </div>

            {/* Middle Section - Contact Us */}
            <div>
              <h4 style={{ 
                color: 'white', 
                fontWeight: '700', 
                fontSize: '16px', 
                marginBottom: '0.3rem',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                Contact Us
              </h4>
              <div style={{
                width: '50px',
                height: '3px',
                backgroundColor: '#F59E0B',
                marginBottom: '1rem'
              }}></div>
              
              <div style={{ 
                fontSize: '13px', 
                color: '#D1D5DB', 
                lineHeight: '1.6',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: '400'
              }}>
                <p style={{ margin: '0 0 6px 0' }}>+92-51-907-5799</p>
                <p style={{ margin: '0 0 6px 0' }}>+92-51-907-5578</p>
                <p style={{ margin: '0 0 6px 0' }}>ncgsa@ist.edu.pk</p>
              </div>
            </div>

            {/* Right Section - Follow Us */}
            <div>
              <h4 style={{ 
                color: 'white', 
                fontWeight: '700', 
                fontSize: '16px', 
                marginBottom: '0.3rem',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                Follow Us
              </h4>
              <div style={{
                width: '50px',
                height: '3px',
                backgroundColor: '#F59E0B',
                marginBottom: '1rem'
              }}></div>
              
              {/* Follow Us - Using SocialIcons component */}
              <SocialIcons variant="footer-follow" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright - Outside the curved box */}
      <div style={{ 
        borderTop: '1px solid #333',
        paddingTop: '1rem',
        backgroundColor: '#1a1a1a'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1.5rem'
        }}>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '13px', 
            color: '#9CA3AF',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: '400',
            margin: 0
          }}>
            © 2025 — Higher Education Commission of Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;