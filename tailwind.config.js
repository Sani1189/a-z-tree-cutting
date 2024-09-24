// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          700: '#2F855A', // Adjust as needed
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],

}
