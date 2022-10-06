module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        mdmBlack: '#191919',
        mdmRed: '#b22d37',
        mdmBlue: '#1146b3',
        mdmGold: {
          100: '#ccad70',
          900: '#b39d32'
        }
      }
    }
  },
  plugins: []
};
