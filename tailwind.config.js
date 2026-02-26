/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // your app folder
    "./pages/**/*.{js,ts,jsx,tsx}", // if using pages
    "./components/**/*.{js,ts,jsx,tsx}", // your components
  ],
  theme: {
    extend: {
      fontFamily: {
        termina: ['var(--font-termina)'],
        dmsans: ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [],
};