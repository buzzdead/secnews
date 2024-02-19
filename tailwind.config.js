/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    ".app/pages/**/*.{js,ts,jsx,tsx}",
    ".app/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:
      {
        'bgc-gray-800-semi-opaque': 'rgba(38, 38, 38, 0.5)!important',
        'bgc': 'white!important'
      },
      colors: {
        'gray-800-semi-opaque': 'rgba(38, 38, 38, 0.5)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    // Add animate utility
    require('tailwindcss-animate'),
  ],
}
