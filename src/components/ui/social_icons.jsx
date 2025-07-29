// src/components/UI/SocialIcons.jsx
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Send, MessageCircle } from 'lucide-react';

const SocialIcons = ({ variant = 'large' }) => {
  // Different icon sets for different sections
  const topSocialIcons = [
    { icon: Facebook },
    { icon: Instagram },
    { icon: Linkedin }
  ];

  const followUsIcons = [
    { icon: Facebook },
    { icon: Linkedin },
    { icon: Instagram },
    { icon: Youtube },
    { icon: Send },
    { icon: MessageCircle }
  ];

  const getIcons = () => {
    switch (variant) {
      case 'footer-top':
        return topSocialIcons;
      case 'footer-follow':
        return followUsIcons;
      case 'large':
        return topSocialIcons;
      case 'small':
        return followUsIcons;
      default:
        return topSocialIcons;
    }
  };

  const getStyles = () => {
    switch (variant) {
      case 'footer-top':
        return {
          containerStyle: { display: 'flex', gap: '1rem' },
          iconWrapperStyle: {
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          },
          iconSize: 24,
          hoverScale: 'scale(1.2)'
        };
      
      case 'footer-follow':
        return {
          containerStyle: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
          iconWrapperStyle: {
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            border: '1px solid white'
          },
          iconSize: 14,
          hoverScale: 'scale(1.1)'
        };
      
      case 'large':
        return {
          containerStyle: { display: 'flex', gap: '1rem' },
          iconWrapperStyle: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          },
          iconSize: 20,
          hoverScale: 'scale(1.1)'
        };
      
      case 'small':
        return {
          containerStyle: { display: 'flex', gap: '8px' },
          iconWrapperStyle: {
            width: '32px',
            height: '32px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          },
          iconSize: 16,
          hoverScale: 'scale(1.1)'
        };
      
      default:
        return {
          containerStyle: { display: 'flex', gap: '1rem' },
          iconWrapperStyle: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          },
          iconSize: 20,
          hoverScale: 'scale(1.1)'
        };
    }
  };

  const icons = getIcons();
  const styles = getStyles();

  return (
    <div style={styles.containerStyle}>
      {icons.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <div
            key={index}
            style={styles.iconWrapperStyle}
            onMouseOver={(e) => e.target.style.transform = styles.hoverScale}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <IconComponent size={styles.iconSize} color="white" />
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcons;