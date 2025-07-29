// src/components/UI/Logo.jsx
import React, { useState } from 'react';
import { Image } from 'antd';

// Import the logo images from src/assets
import serlLogo from '../../assets/images/serl-logo.png';
import ncgsaLogo from '../../assets/images/ncgsa-logo.png';

const Logo = ({ size = 'default', variant = 'serl' }) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    small: { width: 50, height: 40, textSize: '8px' },
    default: { width: 70, height: 50, textSize: '9px' },
    large: { width: 90, height: 65, textSize: '10px' },
    ncgsa: { width: 80, height: 80, textSize: '10px' }
  };

  const currentSize = sizeClasses[size] || sizeClasses.default;

  const handleImageError = () => {
    console.log(`Failed to load ${variant} logo image`);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log(`Successfully loaded ${variant} logo image`);
    setImageError(false);
  };

  // Get logo source and alt text based on variant
  const getLogoProps = () => {
    if (variant === 'ncgsa') {
      return {
        src: ncgsaLogo,
        alt: 'NCGSA Logo',
        fallbackText: 'NCGSA'
      };
    }
    return {
      src: serlLogo,
      alt: 'SERL Logo',
      fallbackText: 'SERL'
    };
  };

  const logoProps = getLogoProps();

  // NCGSA Logo variant for footer (circular)
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
            style={{
              borderRadius: '50%',
              objectFit: 'contain'
            }}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        ) : (
          /* Fallback circle if image fails */
          <div style={{
            width: currentSize.width,
            height: currentSize.height,
            backgroundColor: '#DC2626',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: '700',
            flexShrink: 0,
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            {logoProps.fallbackText}
          </div>
        )}
      </div>
    );
  }

  // Default SERL Logo for header
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        {/* SERL Logo Image using Ant Design */}
        {!imageError && (
          <Image
            src={serlLogo}  // Using imported image
            alt="SERL Logo"
            width={200}
            preview={false}
            height={100}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
        
        {/* Fallback text logo */}
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
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: '800',
              letterSpacing: '1.5px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              {logoProps.fallbackText}
            </span>
          </div>
        )}
        
        {/* Subtitle - Only for SERL logo */}
        {variant === 'serl' && (
          <div style={{ 
            position: 'absolute', 
            bottom: '-18px', 
            left: '0', 
            right: '0',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#D1D5DB',
              fontSize: currentSize.textSize,
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: '500',
              letterSpacing: '0.5px',
              margin: 0,
              whiteSpace: 'nowrap',
              textTransform: 'uppercase'
            }}>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;