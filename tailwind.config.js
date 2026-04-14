/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F3',
        surface: '#FFFFFF',
        graphite: '#1A1A1A',
        teal: '#0D5C5C',
        'teal-hover': '#094141',
        muted: '#E8E6E1',
        secondary: '#5C5C5C'
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"DM Sans"', 'sans-serif'],
        drama: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
