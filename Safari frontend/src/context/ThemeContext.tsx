import React, { createContext, useState, useEffect } from 'react';
import { UserPreferences } from '../types';

type ThemeContextType = {
  preferences: UserPreferences;
  setTheme: (theme: 'light' | 'dark') => void;
  setCurrency: (currency: 'USD' | 'EUR' | 'GBP') => void;
};

const defaultPreferences: UserPreferences = {
  theme: 'light',
  currency: 'USD',
};

export const ThemeContext = createContext<ThemeContextType>({
  preferences: defaultPreferences,
  setTheme: () => {},
  setCurrency: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    const savedPreferences = localStorage.getItem('userPreferences');
    return savedPreferences 
      ? JSON.parse(savedPreferences) 
      : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    
    // Apply theme to document
    if (preferences.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [preferences]);

  const setTheme = (theme: 'light' | 'dark') => {
    setPreferences((prev) => ({ ...prev, theme }));
  };

  const setCurrency = (currency: 'USD' | 'EUR' | 'GBP') => {
    setPreferences((prev) => ({ ...prev, currency }));
  };

  return (
    <ThemeContext.Provider value={{ preferences, setTheme, setCurrency }}>
      {children}
    </ThemeContext.Provider>
  );
};