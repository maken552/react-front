/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      'max-sm': { max: '640px' },
      md: '768px',
      'max-md': { max: '768px' },
      lg: '1024px',
      'max-lg': { max: '1024px' },
      xl: '1280px',
      'max-xl': { max: '1280px' },
      '2xl': '1536px',
      'max-2xl': { max: '1536px' }
    },
    extend: {}
  },
  plugins: []
})
