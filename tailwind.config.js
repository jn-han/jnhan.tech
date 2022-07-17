module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-teal': '#62dfcc',
      'dark-teal': '#088E99',
      'navy': '#181c2c',
      'bone': '#adb5bd',
      'white': '#dee2e6'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '4rem',
      '6xl': '5rem',
      '7xl': '6rem',
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
      },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'fade-in-up': 'fade-in-up 2s ease-out',
        'fade-in-up-delay': 'fade-in-up 2s ease-out 1s',
        'fade-in-up-delay1': 'fade-in-up 2s ease-out 1.5s',
        'fade-in-up-delay2': 'fade-in-up 2s ease-out 2s'
        
      },
    },
  },
  plugins: [],
}