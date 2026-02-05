import React, { useState } from 'react';

export const CodePreview = ({ children, code, title }) => {
  const [showCode, setShowCode] = useState(false);
  
  return (
    <div style={{
      border: '1px solid #f0f0f0',
      borderRadius: '8px',
      marginBottom: '16px',
      overflow: 'hidden'
    }}>
      {title && (
        <div style={{
          padding: '12px 16px',
          borderBottom: '1px solid #f0f0f0',
          fontWeight: 500
        }}>
          {title}
        </div>
      )}
      <div style={{ padding: '24px' }}>
        {children}
      </div>
      <div style={{ borderTop: '1px solid #f0f0f0' }}>
        <button
          onClick={() => setShowCode(!showCode)}
          style={{
            width: '100%',
            padding: '8px',
            background: '#fafafa',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <span>{showCode ? '收起代码' : '展开代码'}</span>
          <span>{showCode ? '↑' : '↓'}</span>
        </button>
        {showCode && (
          <pre style={{
            margin: 0,
            padding: '16px',
            background: '#f6f8fa',
            overflow: 'auto'
          }}>
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
};