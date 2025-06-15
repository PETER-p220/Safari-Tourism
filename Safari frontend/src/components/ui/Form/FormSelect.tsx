import React from 'react';
import { FormSelectProps } from '../../../types';

const FormSelect: React.FC<FormSelectProps & {
  value?: string;
  onChange?: (value: string) => void;
}> = ({
  label,
  name,
  options,
  error,
  required = false,
  disabled = false,
  placeholder = 'Select an option',
  className = '',
  value,
  onChange
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={`
          w-full px-3 py-2 bg-white dark:bg-gray-700 border rounded-md appearance-none
          focus:outline-none focus:ring-2 focus:ring-primary transition-colors
          ${error ? 'border-error focus:ring-error/50' : 'border-gray-300 dark:border-gray-600'}
          ${disabled ? 'bg-gray-100 dark:bg-gray-800 cursor-not-allowed' : ''}
        `}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
};

export default FormSelect;
