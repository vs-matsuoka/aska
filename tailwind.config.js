// prettier-ignore
const redZoneLead = [
  false, false, true, true, false, false, true, true, //
  false, true, false, true, true, false, true, false, //
  true, false, true, true, false, false, true, true, //
  false, true, false, true, true, false, true, false, //
  true, true, false, false, true, true, false, false, //
  true, false, true, false, false, true, false, true, //
  false, true, false, true, false, false, true, true, //
  false, true, false, false, true, false, true, false, //
  true, true, false, false, true, true, false, false, //
  true, false, true, false, false, true, false, true, //
  false, true, false, false, true, true, false, false, //
  true, false, true, false, false, true, false, true, //
  false, false, true, true, false, false, true, true, //
  false, true, false, true, true, false, true, false, //
  true, false, true, false, true, true, false, false, //
  true, false, true, true, true, true, true, true, //
  false,
];

// prettier-ignore
const redZoneBass = [
  false, false, true, true, false, false, true, false, //
  true, true, false, false, true, true, false, false, //
  true, true, false, false, true, true, false, true, //
  false, false, true, true, false, false, true, true, //
  false,
];

// @param {boolean[]} beats
function redZoning(beats) {
  return beats.map((b, i) => {
    let key = '';
    if (i === i.length - 1) {
      key = '100%';
    } else {
      key = `${(i * 100) / (beats.length - 1)}%`;
    }
    return {
      [key]: { transform: b ? 'scale(-1, 1)' : 'scale(1, 1)' }
    };
  });
}

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
        },
        'redzone-left': redZoning(redZoneLead),
        'redzone-right': redZoning(redZoneBass),
        'keyvisual-float': {
          '0%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(20px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        'fade-in-from-left': 'fade-in-from-left 0.2s ease-out',
        'evans-left': 'spin 0.5s linear infinite',
        'evans-right': 'spin 0.5s linear reverse infinite',
        'redzone-left': 'redzone-left 11.636s steps(1, jump-start) infinite',
        'redzone-right': 'redzone-right 11.636s steps(1, jump-start) infinite',
        'zeus-float': 'keyvisual-float 4s ease-in-out -1s infinite',
        'amateras-float': 'keyvisual-float 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
