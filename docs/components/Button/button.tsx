import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  style,
  ...props 
}: ButtonProps) => {
  // 简单的样式模拟，实际项目中通常使用 class 或 CSS Modules
  const baseStyle: React.CSSProperties = {
    borderRadius: '6px',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style,
  };

  const variants = {
    primary: { background: '#000', color: '#fff', borderColor: '#000' },
    secondary: { background: '#f4f4f5', color: '#18181b', borderColor: '#f4f4f5' },
    outline: { background: 'transparent', color: '#000', borderColor: '#e4e4e7' },
  };

  const sizes = {
    sm: { padding: '0.25rem 0.75rem', fontSize: '0.875rem', height: '32px' },
    md: { padding: '0.5rem 1rem', fontSize: '1rem', height: '40px' },
    lg: { padding: '0.75rem 1.5rem', fontSize: '1.125rem', height: '48px' },
  };

  return (
    <button
      {...props}
      style={{
        ...baseStyle,
        ...variants[variant],
        ...sizes[size],
      }}
    >
      {children}
    </button>
  );
};