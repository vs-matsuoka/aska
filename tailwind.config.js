module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        mdmRed: '#b32d38',
        mdmBlue: '#1247b3'
      },
      screens: {
        '4xl': '1920px'
      }
    }
  },
  plugins: []
};
