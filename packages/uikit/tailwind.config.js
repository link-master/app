/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lib/**/*.{jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'sans-serif'],
      },
      fontSize: {
        sm: '0.75rem',
        base: '0.875rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}

