/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "370px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      mdA: "800px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          mobile: "1rem",
          xs: "1.088rem",
          sm: "2.288rem",
          md: "2.288rem",
          lg: "3.988rem",
          xl: "4.088rem",
          "2xl": "7.875rem",
        },
      },
      fontFamily: {
        Vazir: "Vazir",
        VazirRegular: "VazirRegular",
      },

      colors: {
        background: "#ffffff",
        customGreen: {
          100: "#D8FFE1",
          200: "#28A745",
          300: "#10411B",
        },
        customGray: {
          100: "#282828",
        },
        customBlue: {
          100: "#009ECA",
        },
        customYellow: {
          100: "#D1B900",
        },
        customRed: {
          100: "#D40000",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
