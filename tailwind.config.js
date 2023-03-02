/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
       theme:{
          main:'#FFC20E',
          lightblue:'#E6EFFC',
          red:'#E40A3E'
       }
      },
      fontFamily: {
        auxbold: ['Aux_bold', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '3rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [],
}
