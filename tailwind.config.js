/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('./src/assets/home/background-home-mobile.jpg')",
        "hero-tablet": "url('./src/assets/home/background-home-tablet.jpg')",
        "hero-desktop": "url('./src/assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('./src/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('./src/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('./src/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('./src/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('./src/assets/crew/background-crew-desktop.jpg')",
      },
      colors: {
        "light-white": "#D0D6F9",
      },
      fontFamily: {
        barlow: "'Barlow', sans-serif",
        belleFair: "'Bellefair', sans-serif",
      },
    },
  },
  plugins: [],
};
