import React, { useState } from 'react';
import { Image, Grid } from 'antd';
import serlLogo from '../../assets/images/serl-logo.png';
import ncgsaLogo from '../../assets/images/ncgsa-logo.png';

const { useBreakpoint } = Grid;

const Logo = ({ size = 'default', variant = 'serl' }) => {
  const [imageError, setImageError] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md; 

  const getSizeConfig = () => {
    const sizes = {
      small: { width: isMobile ? 45 : 50, height: isMobile ? 35 : 40, textSize: isMobile ? '7px' : '8px' },
      default: { width: isMobile ? 60 : 70, height: isMobile ? 40 : 50, textSize: isMobile ? '8px' : '9px' },
      large: { width: isMobile ? 80 : 90, height: isMobile ? 55 : 65, textSize: isMobile ? '9px' : '10px' },
      ncgsa: { width: isMobile ? 70 : 80, height: isMobile ? 70 : 80, textSize: isMobile ? '9px' : '10px' }
    };
    return sizes[size] || sizes.default;
  };

  const currentSize = getSizeConfig();

  const getLogoProps = () => {
    if (variant === 'ncgsa') {
      return { src: ncgsaLogo, alt: 'NCGSA Logo', fallbackText: 'NCGSA' };
    }
    return { src: serlLogo, alt: 'SERL Logo', fallbackText: 'SERL' };
  };

  const logoProps = getLogoProps();

  // NCGSA circular logo for footer
  if (variant === 'ncgsa') {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {!imageError ? (
          <Image
            src={logoProps.src}
            alt={logoProps.alt}
            width={currentSize.width}
            height={currentSize.height}
            preview={false}
            style={{ borderRadius: '50%', objectFit: 'contain' }}
            onError={() => setImageError(true)}
            onLoad={() => setImageError(false)}
          />
        ) : (
          <div style={{
            width: currentSize.width,
            height: currentSize.height,
            backgroundColor: '#DC2626',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: isMobile ? '10px' : '12px',
            fontWeight: '700',
            flexShrink: 0,
            fontFamily: 'Inter'
          }}>
            {logoProps.fallbackText}
          </div>
        )}
      </div>
    );
  }

  // Default SERL logo for header
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        {!imageError && (
          <Image
            src={serlLogo}
            alt="SERL Logo"
            width={isMobile ? 160 : 200}
            height={isMobile ? 80 : 100}
            preview={false}
            onError={() => setImageError(true)}
            onLoad={() => setImageError(false)}
            style={{ objectFit: 'contain' }}
          />
        )}
        
        {imageError && (
          <div style={{
            width: currentSize.width,
            height: currentSize.height,
            background: 'linear-gradient(135deg, #2563EB 0%, #F97316 45%, #F97316 55%, #2563EB 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
              borderRadius: '8px'
            }} />
            
            <span style={{
              position: 'relative',
              color: 'white',
              fontFamily: 'Inter',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '800',
              letterSpacing: '1.5px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              {logoProps.fallbackText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;