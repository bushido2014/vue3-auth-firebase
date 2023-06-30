/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif;",
      },
      container: {
        center: true,
        padding: '1.4rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
