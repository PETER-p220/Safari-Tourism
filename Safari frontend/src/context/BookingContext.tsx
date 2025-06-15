import React, { createContext, useState, useCallback } from 'react';
import { BookingFormData, SafariPackage } from '../types';

type BookingContextType = {
  selectedPackage: SafariPackage | null;
  bookingData: Partial<BookingFormData>;
  setSelectedPackage: (pkg: SafariPackage | null) => void;
  updateBookingData: (data: Partial<BookingFormData>) => void;
  resetBooking: () => void;
  availableDates: Date[];
  isDateAvailable: (date: Date) => boolean;
};

const initialBookingData: Partial<BookingFormData> = {};

export const BookingContext = createContext<BookingContextType>({
  selectedPackage: null,
  bookingData: initialBookingData,
  setSelectedPackage: () => {},
  updateBookingData: () => {},
  resetBooking: () => {},
  availableDates: [],
  isDateAvailable: () => false,
});

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState<SafariPackage | null>(null);
  const [bookingData, setBookingData] = useState<Partial<BookingFormData>>(initialBookingData);
  
  // Mock available dates (in a real app, this would come from an API)
  const availableDates = Array.from({ length: 60 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return new Date(date);
  });

  const isDateAvailable = useCallback((date: Date) => {
    return availableDates.some(availableDate => 
      availableDate.toDateString() === date.toDateString()
    );
  }, [availableDates]);

  const updateBookingData = useCallback((data: Partial<BookingFormData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  }, []);

  const resetBooking = useCallback(() => {
    setSelectedPackage(null);
    setBookingData(initialBookingData);
  }, []);

  return (
    <BookingContext.Provider 
      value={{ 
        selectedPackage, 
        bookingData, 
        setSelectedPackage, 
        updateBookingData, 
        resetBooking,
        availableDates,
        isDateAvailable
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};