/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth:{
        '48': '48px',
        '60': '60px'
      },
      fontFamily: {
        titleFont: ["Gildo Display"],
        titleFont2: ("DM Serif Display")
      }, 
    },
    },
  plugins: [],
};
