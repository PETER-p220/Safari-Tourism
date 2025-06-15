/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4CAF50',
          DEFAULT: '#2E7D32',
          dark: '#1B5E20',
        },
        secondary: {
          light: '#8D6E63',
          DEFAULT: '#795548',
          dark: '#5D4037',
        },
        success: {
          light: '#81C784',
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
        },
        warning: {
          light: '#FFD54F',
          DEFAULT: '#FFC107',
          dark: '#FFA000',
        },
        error: {
          light: '#E57373',
          DEFAULT: '#F44336',
          dark: '#D32F2F',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1E1E1E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};