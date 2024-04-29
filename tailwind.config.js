/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      // Base colors
      'rich-black': '#0D1321',
      'oxford-blue': '#111A2C',
      'space-cadet': '#1D2B49',
      'delft-blue': '#233458',
      'dim-gray': '#73746D',
      'white-smoke': '#F3F3F3',
      'timber-wolf': '#D6D6D6',
      'silver': '#CCCCCC',

      // Helper colors
      'sunglow': '#FDCA40',
      'forest-gree': '#409448',
      'vermilion': '#FF3E3E',

      // Primary colors options
      // Purple theme
      'eletric-indigo': '#6320EE',
      'medium-state-blue': '#8E6CE0',

      // Complementary theme
      'savoy-blue': '#5762D5',
      'rose': '#FF206E',

      // Coral theme
      'coquelicot': '#FF4000',
      'coral': '#EF8354',

      // Pink theme
      'ultra-pink': '#FF69EB',
      'persian-pink': '#FF86C8',

      // 50's theme
      'celestial-blue': '#20A4F3',
      'folly': '#FF3366',

      // Flame theme
      'flame': '#EC4E20',
      'princeton-orange': '#FF9505',
    }
  },
  plugins: [],
}
