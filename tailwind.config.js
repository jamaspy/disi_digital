/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#ecf2ef',
        'primary-200': '#e0e9e5',
        'primary-300': '#d4e0da',
        primary: '#C1D3CA',
        secondary: '#d3c1d1',
        'secondary-500': '#948792',
        'primary-500': '#879490',
        'primary-600': '#87948d',
        'primary-700': '#747f79',
        'primary-800': '#4d5451',
        'primary-900': '#131514',
        highlight: '#d3cec1',
      },
    },
    plugins: [],
  },
};
