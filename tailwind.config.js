/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/Images/banner_bg.jpg')"
      },
      fontFamily: {
        'mont': ["Montserrat", 'sans-serif'],
        'roboto': ["Roboto", 'sans-serif']
      }
    },
  },
  plugins: [],
}

