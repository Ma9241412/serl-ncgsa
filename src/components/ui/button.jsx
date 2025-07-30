import React from 'react';
import { Button as AntButton, Grid } from 'antd';

const { useBreakpoint } = Grid;

const Button = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  disabled = false,
  style = {}
}) => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const getButtonProps = () => {
    const baseStyle = {
      fontFamily: 'Inter',
      fontWeight: '700',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      borderRadius: '4px',
      height: 'auto'
    };

    switch (variant) {
      case 'primary':
        return {
          type: 'primary',
          style: {
            ...baseStyle,
            backgroundColor: '#FF9500',
            borderColor: '#FF9500',
            color: '#000000',
            boxShadow: '0 2px 4px rgba(255, 149, 0, 0.2)'
          }
        };
      
      case 'secondary':
        return {
          type: 'default',
          style: {
            ...baseStyle,
            backgroundColor: '#6B7280',
            borderColor: '#6B7280',
            color: 'white',
            boxShadow: '0 2px 4px rgba(107, 114, 128, 0.2)'
          }
        };
      
      case 'outline':
        return {
          type: 'default',
          style: {
            ...baseStyle,
            backgroundColor: 'transparent',
            borderColor: '#F97316',
            color: '#F97316',
            border: '2px solid #F97316'
          }
        };
      
      default:
        return {
          type: 'primary',
          style: baseStyle
        };
    }
  };

  const getSizeProps = () => {
    const basePadding = {
      small: isMobile ? '6px 12px' : '8px 16px',
      medium: isMobile ? '10px 20px' : '12px 24px',
      large: isMobile ? '14px 28px' : '16px 32px',
      full: isMobile ? '10px 20px' : '12px 24px'
    };

    const sizes = {
      small: { size: 'small', style: { padding: basePadding.small, fontSize: '12px' }},
      medium: { size: 'middle', style: { padding: basePadding.medium, fontSize: '13px' }},
      large: { size: 'large', style: { padding: basePadding.large, fontSize: '14px' }},
      full: { size: 'middle', block: true, style: { padding: basePadding.full, fontSize: '13px', width: '100%' }}
    };

    return sizes[size] || sizes.medium;
  };

  const buttonProps = getButtonProps();
  const sizeProps = getSizeProps();

  return (
    <AntButton
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...buttonProps}
      {...sizeProps}
      style={{
        ...buttonProps.style,
        ...sizeProps.style,
        ...style
      }}
      onMouseEnter={(e) => {
        if (!disabled && variant === 'primary') {
          e.target.style.backgroundColor = '#E6850E';
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 4px 8px rgba(255, 149, 0, 0.3)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && variant === 'primary') {
          e.target.style.backgroundColor = '#FF9500';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 4px rgba(255, 149, 0, 0.2)';
        }
      }}
    >
      {text}
    </AntButton>
  );
};

export default Button;