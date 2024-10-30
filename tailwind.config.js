// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#2b2b2b', // Dark container color
        'green-counter': '#00FF7F', // Green counter color
      },
    },
  },
  plugins: [],
};
