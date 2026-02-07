/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1187CF',
        'primary-light': '#669DFD',
        'text-main': 'rgb(55, 53, 47)',
        'bg-gray': '#F5F5F5',
        'text-muted': '#9D9D9D',
      },
    },
  },
  plugins: [],
}
