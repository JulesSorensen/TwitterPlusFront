/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1a202c',
        'secondary': '#2d3748',
        'accent': '#ed8936',
        'success': '#48bb78',
        'info': '#4299e1',
        'warning': '#ed8936',
        'danger': '#e53e3e',
        'light': '#f7fafc',
        'dark': '#1a202c'
      }
    }
  }
}
