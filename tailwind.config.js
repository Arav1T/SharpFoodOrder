/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        'meals-appear': {
          from: { opacity: '0', transform: 'translateY(3rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-3rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'meals-appear': 'meals-appear 1s ease-out forwards',
        'slide-down': 'slideDown 300ms ease-out forwards',
      },},
  },
  plugins: [],
}

