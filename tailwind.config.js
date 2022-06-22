/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
      },
    },
    colors: {
      darkBlue: '#2b3945',
      veryDarkBlueBG: '#202c37',
      VeryDarkBlueTXT: '#111517',
      darkGray: '#858585',
      veryLightGray: '#fafafa',
      whiteTXT: '#ffffff',
    },
  },
  plugins: [],
};
