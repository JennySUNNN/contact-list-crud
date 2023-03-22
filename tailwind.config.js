/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firaMono: ["Fira Mono", "monospace"],
        playfairDisplay: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        yesevaOne: ["Yeseva One", "cursive"],
      },
    },
  },
  plugins: [],
};
