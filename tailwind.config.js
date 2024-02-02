/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'background-grey' : '#212121',
        'Neon-Green' : '#2AFF99',
        'background-lightgrey' : '#E2E2E2',
      },
      fontFamily: {
        'Jakarta' : ['"Plus Jakarta Sans"'],
        'Poppins' : ["Poppins"],
      },
    },
  },
  plugins: [],
}

