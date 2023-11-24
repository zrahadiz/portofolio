/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens:{
        'xs': '420px',
        '2lg': '860px'
      },
      margin:{
        '1.25': '0.325rem',
        '22': '5.5rem'
      },
      width:{
        '76': '19rem',
        '18': '4.5rem'
      },
      height:{
        '30': '7.5rem'
      },
      colors:{
        navBg: '#1f1f21',
        crimson: '#dc143c',
        readonly: '#e9ecef',
      },
      fontSize:{
        "2xs": "0.5rem"
      },
      fontFamily:{
        roboto: ['Roboto'],
        bebasNeue: ['"Bebas Neue"'],
        quicksand: ['Quicksand'],
        permanentMarker: ['"Permanent Marker"'],
        audiowide: ['Audiowide'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 45px 70px -17px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

