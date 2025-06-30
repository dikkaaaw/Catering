/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#22A45D',
        secondary: '#868686',
        black: '#010F07',
      },
      fontFamily: {
        'sf-regular': ['SF-Pro-Display-Regular'],
        'sf-medium': ['SF-Pro-Display-Medium'],
        'sf-semibold': ['SF-Pro-Display-Semibold'],
        'sf-bold': ['SF-Pro-Display-Bold'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-h1': {
          fontFamily: 'SF-Pro-Display-Semibold',
          fontSize: '34px',
          color: '#010F07',
        },
        '.text-body': {
          fontFamily: 'SF-Pro-Display-Regular',
          fontSize: '18px',
          color: '#868686',
          lineHeight: '24px',
        },
        '.text-headline': {
          fontFamily: 'SF-Pro-Display-Bold',
          fontSize: '30px',
          color: '#010F07',
          lineHeight: '38px',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
