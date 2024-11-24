/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html" ,"./src/**/*.js"],
  theme: {
    fontFamily: {
      Segoe: ["Segoe UI Light"],
    },
    container: {
      center: true,
      padding: "6rem",
    },
    extend: {},
  },
  plugins: [],
};
