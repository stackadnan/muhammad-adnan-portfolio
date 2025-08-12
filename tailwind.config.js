/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        primary: {
          DEFAULT: '#0a0a0a',
          light: '#f8fafc'
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          light: '#f1f5f9'
        },
        accent: {
          DEFAULT: '#3b82f6',
          light: '#2563eb'
        },
        text: {
          DEFAULT: '#ffffff',
          light: '#1e293b'
        },
        'text-secondary': {
          DEFAULT: '#a3a3a3',
          light: '#64748b'
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
