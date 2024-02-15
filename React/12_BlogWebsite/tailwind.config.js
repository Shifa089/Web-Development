/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': {'max':'480px'},
        'md': {'max':'799px'},
      }
    },
  },
  plugins: [],
}

