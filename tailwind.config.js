/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          100: "#FFFFFF",
          200: "#F4F4F4",
          300: "#E9E9E9",
          400: "#757575",
          500: "#3A3A3A",
          600: "#2D2D2D",
          700: "#1F1F1F",
          800: "#050505",
        },
        primary: "#A445ED",
        secondary: "#FF5252",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
