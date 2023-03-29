/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        theme: {
          main: "#FFC20E",
          lightblue: "#E6EFFC",
          red: "#E40A3E",
          gray: "#333333",
        },
      },
      fontFamily: {
        auxbold: ["Aux_bold", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
    },
    screens: {
      sm: "480px",
      tablet: "768px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
      "2xl": "1800px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        tablet: "2rem",
        md: "2rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
  },
  plugins: [],
};
