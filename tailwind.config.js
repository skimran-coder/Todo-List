/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          light: '#AAD9BB',
          DEFAULT: '#5F374B', // Default color (for light mode)
          dark: '#31363F', // Dark mode color (same as light mode in this example)
        },
        background: {
          light: '#80BCBD',
          lighter: '#aae5e6',
          DEFAULT: '#f2f2f2',
          dark: '#222831',
        },
        text: {
          light: '#F9F7C9',
          DEFAULT: '#333333',
          dark: '#EEEEEE',
        },
        secondary: {
          light: '#D5F0C1',
          DEFAULT: '#6c757d',
          dark: '#76ABAE',
        },
        error: {
          light: '#dc3545',
          DEFAULT: '#dc3545',
          dark: '#dc3545',
        },
        success: {
          light: '#28a745',
          DEFAULT: '#28a745',
          dark: '#53ed76',
          darker: '#28a745',
        },
        neutral: {
          light: '#dddddd',
          DEFAULT: '#dddddd',
          dark: '#555555',
        },
      },
    },
  },
  plugins: [],
}

