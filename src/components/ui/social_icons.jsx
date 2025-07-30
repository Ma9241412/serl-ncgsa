import React from 'react';
import { Row, Col, Button, Grid } from 'antd';
import { Facebook, Instagram, Linkedin, Youtube, Send, MessageCircle } from 'lucide-react';

const { useBreakpoint } = Grid;

const SocialIcons = ({ variant = 'large' }) => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const iconSets = {
    top: [{ icon: Facebook }, { icon: Instagram }, { icon: Linkedin }],
    follow: [{ icon: Facebook }, { icon: Linkedin }, { icon: Instagram }, { icon: Youtube }, { icon: Send }, { icon: MessageCircle }]
  };

  const getIcons = () => {
    const sets = {
      'footer-top': iconSets.top,
      'footer-follow': iconSets.follow,
      'large': iconSets.top,
      'small': iconSets.follow
    };
    return sets[variant] || iconSets.top;
  };

  const getConfig = () => {
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none'
    };

    const configs = {
      'footer-top': {
        gutter: isMobile ? 8 : 16,
        iconSize: isMobile ? 20 : 24,
        buttonSize: 'middle',
        buttonStyle: {
          ...baseStyle,
          width: isMobile ? '36px' : '40px',
          height: isMobile ? '36px' : '40px',
          borderRadius: '8px',
          backgroundColor: 'transparent',
          color: 'white'
        }
      },
      'footer-follow': {
        gutter: 8,
        iconSize: 14,
        buttonSize: 'small',
        buttonStyle: {
          ...baseStyle,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          border: '1px solid white',
          color: 'white'
        }
      },
      'large': {
        gutter: isMobile ? 12 : 16,
        iconSize: isMobile ? 18 : 20,
        buttonSize: 'middle',
        buttonStyle: {
          ...baseStyle,
          width: isMobile ? '36px' : '40px',
          height: isMobile ? '36px' : '40px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white'
        }
      },
      'small': {
        gutter: 8,
        iconSize: 16,
        buttonSize: 'small',
        buttonStyle: {
          ...baseStyle,
          width: '32px',
          height: '32px',
          borderRadius: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white'
        }
      }
    };

    return configs[variant] || configs.large;
  };

  const icons = getIcons();
  const config = getConfig();

  return (
    <Row gutter={config.gutter} justify="start" align="middle">
      {icons.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <Col key={index}>
            <Button
              type="text"
              size={config.buttonSize}
              style={config.buttonStyle}
              icon={<IconComponent size={config.iconSize} />}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.transition = 'transform 0.2s ease';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default SocialIcons;