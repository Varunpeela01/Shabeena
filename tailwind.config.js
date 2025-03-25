/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          200: "#f5d9e8",
          300: "#f8b3c7",
          400: "#ff69b4",
          500: "#ff6f91",
          600: "#ff6f91",
        },
        peach: {
          300: "#f7c7b2",
        },
        red: {
          50: "#fff5f5",
        },
      },
    },
  },
  plugins: [],
};
