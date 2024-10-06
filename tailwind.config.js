/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // ...


  theme: {
    extend: {
      colors: {
          'primary': '#f3c614',
          'secondary': '#353535',
          yellow: '#F7DC6F',
      },
      height: {
        '100': '25rem',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      },
      backgroundColor: {
        'yellow': '#F7DC6F',
      },
    },
  },
  variants: {},
  plugins: []
}


