/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            'h1': {
              fontWeight: '500', // Medium weight
            },
            'h2': {
              fontWeight: '500',
            },
            'h3': {
              fontWeight: '500',
            },
            'h4': {
              fontWeight: '500',
            },
            'h5': {
              fontWeight: '500',
            },
            'h6': {
              fontWeight: '500',
            },
          },
        },
      }),
    },
  },
}