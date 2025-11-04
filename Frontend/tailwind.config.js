import Fifthpage from "./src/pages/Fifthpage";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        thirdpage: "repeat(auto-fill,minmax(300px,1fr))",
        Fifthpage: "repeat(auto-fill,minmax(300px,1fr))",
        grid1 : "repeat(2,minmax(400px,2fr))"
      },
      colors: {
        primary: "#042F1A",
        secondary: "#FF73B5",
        thirdpage: "#fff6f6",
        grid1: "#1abe71",
        grid2: "#ffb500",
      },
      animation: {
        "loop-scroll1": "loop-scroll1 1s linear infinite",
        "loop-scroll2": "loop-scroll2 8s linear infinite",
      },
      keyframes: {
        "loop-scroll1": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 8px ))",
          },
        },
        "loop-scroll2": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
