import React, { forwardRef } from 'react';
import { FormInputProps } from '../../../types';

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, name, type = 'text', placeholder = '', error, required = false, disabled = false, className = '', ...rest }, ref) => {
    return (
      <div className={`mb-4 ${className}`}>
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          ref={ref}
          disabled={disabled}
          className={`
            w-full px-3 py-2 bg-white dark:bg-gray-700 border rounded-md
            focus:outline-none focus:ring-2 focus:ring-primary transition-colors
            ${error ? 'border-error focus:ring-error/50' : 'border-gray-300 dark:border-gray-600'}
            ${disabled ? 'bg-gray-100 dark:bg-gray-800 cursor-not-allowed' : ''}
          `}
          {...rest}
        />
        {error && (
          <p className="mt-1 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);

export default FormInput;
