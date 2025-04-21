/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins :["Poppins", "serif"],
        syne: ['Syne', 'sans-serif'],
        grotesk: ['Space Grotesk', 'system-ui', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        mono: ["Schibsted Grotesk", 'serif'],
      }
    },
  },
  plugins: [],
}

