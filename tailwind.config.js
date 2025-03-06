// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      textStroke: {
        1: '0.3px #FFA360',
      },
    },
  },
  plugins: [
    // Adding custom utilities for text-stroke
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '0.3px #FFA360',
          'color': 'var(--black)',
        },
        '.text-stroke-none': {
          '-webkit-text-stroke': '0px !important',
        },
      });
    },
  ],
}
