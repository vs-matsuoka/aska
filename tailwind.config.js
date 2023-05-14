module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mdmRed: '#b32d38',
        mdmBlue: '#1247b3'
      },
      screens: {
        '4xl': '1920px',
        sp: '750px'
      },
      keyframes: {
        'fade-in-from-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'fade-in-from-left': 'fade-in-from-left 0.2s ease-out'
      }
    }
  },
  plugins: []
};
