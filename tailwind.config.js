/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bandage-blue': '#23A6F0',
        'bandage-dark': '#252B42',
        'bandage-gray': '#737373',
        'bandage-success': '#2DC071',
        'bandage-light': '#FAFAFA',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
