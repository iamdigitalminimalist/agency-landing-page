/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "custom-soft-red": "#fe7867",
      "custom-yellow": "#fad400",
      "custom-dark-desaturated-cyan": "#25564b",
      "custom-dark-moderate-cyan": "#458c7e",
      "custom-dark-blue": "#19536b",
      "custom-extra-dark-desaturated-blue": "#23303e",
      "custom-extra-dark-grayish-blue": "#5a636c",
      "custom-dark-grayish-blue": "#818498",
      "custom-grayish-blue": "#a7abae",
      "custom-white": "#ffffff",
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/image-header.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-barlow)", ...fontFamily.sans],
        serif: ["var(--font-fraunces)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
