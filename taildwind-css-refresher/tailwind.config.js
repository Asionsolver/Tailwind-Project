/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Rebecca-Purple"	: {
          400: "#9370DB",
          500: "#663399",
        },
      },
    },
  },
  plugins: [],
};
