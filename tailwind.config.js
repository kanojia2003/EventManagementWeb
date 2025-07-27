// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      gold: '#D4AF37',
      black: '#0D0D0D',
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
},

  plugins: [],
};
