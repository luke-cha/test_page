/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F2F2F2',
        surface: '#FFFFFF',
        'surface-alt': '#F8FAF8',
        mint: {
          50: '#EDF7F0',
          100: '#D4EDDA',
          200: '#B8E0C2',
          400: '#6ABF82',
          600: '#3DA360',
        },
        charcoal: {
          DEFAULT: '#3C3C3C',
          light: '#5A5A5A',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#6B7280',
          muted: '#9CA3AF',
        },
        border: {
          DEFAULT: '#E5E7EB',
          light: '#F0F0F0',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
