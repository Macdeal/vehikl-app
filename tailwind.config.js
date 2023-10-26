/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#ff731f",
        "gery-text": "#d1d5db",
				brand: "#dd5f13",
      },
    },
  },
  plugins: [],
};
