/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ocean: {
          50: '#f0f7fa',
          100: '#dceef3',
          200: '#bde0ea',
          300: '#8ecad9',
          400: '#58acc2',
          500: '#3c91a8',
          600: '#34778d',
          700: '#2f6274',
          800: '#2e5261',
          900: '#2a4553',
          950: '#162c37',
        },
        sand: {
          50: '#faf8f5',
          100: '#f3eee4',
          200: '#e6dac6',
          300: '#d4c19f',
          400: '#c2a57a',
          500: '#b59060',
          600: '#a77d54',
          700: '#8b6548',
          800: '#71533f',
          900: '#5d4535',
          950: '#31231b',
        },
        gold: {
          400: '#d4a853',
          500: '#c4963a',
        },
      },
    },
  },
  plugins: [],
};
