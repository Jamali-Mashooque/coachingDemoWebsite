/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#102b46',
        ink: '#14263d',
        gold: '#f3b544',
        cream: '#fbf8f1',
        mist: '#eef4f7',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(16, 43, 70, 0.10)',
      },
    },
  },
  plugins: [],
}
