/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violentDark: "#1a0745",
        lightGray: "#5F517D",
        darkGray: "#A39CB5",
        muted: "rgba(26, 7, 69, 0.1)",
        darkMuted: "#e8e6ec",
        // darkPurple: "#543E81",
        darkPurple: "#76659a",
        lightPurple: "#9d71fd",
        bgLight: "#f2effe",
      },
      fontFamily: {
        circular: ["Circular"],
        sfPro: ["SF-Pro"],
      },
      boxShadow: {
        activeFeatureCard: "0 0 0 2px #9d71fd;",
      },
    },
  },
  plugins: [],
};
