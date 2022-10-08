/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
      Raleway: ['Raleway', 'sans-serif'],
      Dafoe: ['Mr Dafoe', 'cursive'],
    },
    fontVariantCaps: {
      // defaults to these values
      small: 'small-caps',
      'all-small': 'all-small-caps',
    },
    extend: {
      colors: {
        'light-grey': 'hsl(209, 15%, 85%)',
        'dark-blue': 'hsl(209, 60%, 10%)',
        'navy-blue': 'hsl(209, 30%, 30%)',
        'light-blue': 'hsl(209, 75%, 67%)',
        'light-blue-alt': 'hsl(209, 54%, 60%)',
        accent: 'hsl(35, 88%, 52%)',
        'accent-alt': 'hsl(54, 80%, 65%)',
        'off-black': 'hsl(209, 6%, 5%)',
      },
    },
  },
  plugins: [],
};
