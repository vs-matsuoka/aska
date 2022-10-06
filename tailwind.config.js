module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#191919',
        red: '#b22d37',
        blue: '#1146b3',
        gold: {
          100: '#ccad70',
          900: '#b39d32'
        }
      }
    }
  },
  plugins: []
};
