// Spinner.tsx
import React from 'react';
import './Spinner.css';

interface SpinnerProps {
  size?: string; // 'small', 'medium', 'large' or any custom size
  color?: string; // any CSS color value
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', color = '#333' }) => {
  return (
    <div className={`spinner spinner--${size}`} style={{ borderColor: `${color} transparent transparent transparent` }}>
    </div>
  );
};

export default Spinner;
