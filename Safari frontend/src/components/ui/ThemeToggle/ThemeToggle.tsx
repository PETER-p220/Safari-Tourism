import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { preferences, setTheme } = useTheme();
  const isDark = preferences.theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-indigo-700" />
      )}
    </button>
  );
};

export default ThemeToggle;