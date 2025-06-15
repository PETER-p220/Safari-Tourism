import React from 'react';
import { CardProps } from '../../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-200';
  const hoverStyles = hoverable 
    ? 'hover:shadow-lg transform hover:-translate-y-1' 
    : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;