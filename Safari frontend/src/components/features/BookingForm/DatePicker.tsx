import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useBooking } from '../../../hooks/useBooking';

type DatePickerProps = {
  selected: Date;
  onChange: (date: Date) => void;
  className?: string;
};

const DatePicker: React.FC<DatePickerProps> = ({ 
  selected, 
  onChange,
  className = '' 
}) => {
  const { isDateAvailable } = useBooking();
  
  // Set minimum date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  // Custom day rendering to highlight available dates
  const renderDayContents = (day: number, date: Date) => {
    return (
      <span className={!isDateAvailable(date) ? 'text-gray-300 line-through' : ''}>
        {day}
      </span>
    );
  };
  
  const filterAvailableDates = (date: Date) => {
    // Filter out dates in the past
    const isPastDate = date < tomorrow;
    if (isPastDate) return false;
    
    // Check if date is available based on context
    return isDateAvailable(date);
  };

  return (
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      minDate={tomorrow}
      filterDate={filterAvailableDates}
      renderDayContents={renderDayContents}
      className={className}
      dateFormat="MMMM d, yyyy"
    />
  );
};

export default DatePicker;