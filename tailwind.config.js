/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "hero-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "hero-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
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
