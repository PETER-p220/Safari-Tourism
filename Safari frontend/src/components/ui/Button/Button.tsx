import React from 'react';
import { ButtonProps } from '../../../types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
}) => {
  // Base styles
  const baseStyles = 'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size styles
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2.5 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
  };
  
  // Loading and disabled states
  const stateStyles = isLoading || disabled
    ? 'opacity-70 cursor-not-allowed'
    : 'cursor-pointer';
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${stateStyles} ${widthStyles} ${className}`;
  
  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;