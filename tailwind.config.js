/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
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
  plugins: [],
};
