// src/components/UI/Button.jsx
import React from 'react';

const Button = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  disabled = false 
}) => {
  
  const baseStyle = {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: '700',
    letterSpacing: '0.5px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
    display: 'inline-block',
    textAlign: 'center',
    outline: 'none'
  };
  
  const variants = {
    primary: {
      backgroundColor: '#F97316',
      color: '#000000',
      boxShadow: '0 2px 4px rgba(249, 115, 22, 0.2)'
    },
    secondary: {
      backgroundColor: '#6B7280',
      color: 'white',
      boxShadow: '0 2px 4px rgba(107, 114, 128, 0.2)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#F97316',
      border: '2px solid #F97316'
    }
  };

  const sizes = {
    small: {
      padding: '8px 16px',
      fontSize: '12px'
    },
    medium: {
      padding: '12px 24px',
      fontSize: '13px'
    },
    large: {
      padding: '16px 32px',
      fontSize: '14px'
    },
    full: {
      padding: '12px 24px',
      fontSize: '13px',
      width: '100%'
    }
  };

  const disabledStyle = disabled 
    ? { 
        opacity: 0.5, 
        cursor: 'not-allowed',
        transform: 'none'
      } 
    : {};

  const combinedStyle = {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size],
    ...disabledStyle
  };

  const handleMouseOver = (e) => {
    if (!disabled) {
      if (variant === 'primary') {
        e.target.style.backgroundColor = '#EA580C';
        e.target.style.transform = 'translateY(-1px)';
        e.target.style.boxShadow = '0 4px 8px rgba(249, 115, 22, 0.3)';
      } else if (variant === 'outline') {
        e.target.style.backgroundColor = '#F97316';
        e.target.style.color = '#000000';
      }
    }
  };

  const handleMouseOut = (e) => {
    if (!disabled) {
      if (variant === 'primary') {
        e.target.style.backgroundColor = '#F97316';
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 4px rgba(249, 115, 22, 0.2)';
      } else if (variant === 'outline') {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = '#F97316';
      }
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={combinedStyle}
      className={className}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {text}
    </button>
  );
};

export default Button;