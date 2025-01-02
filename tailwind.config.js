/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'tab-bar': {
          light: '#3D5C42',
          dark: '#5361BF'
        },
        'accent-bg': {
          light: '#1f3821',
          dark: '#1A237E'
        },
        'accent-bg-opactity-80': {
          light: '#1f3821cc',
          dark: '#1A237Ecc'
        },
        'accent-bg-opactity-50': {
          light: '#1f38217f',
          dark: '#1A237E7f'
        },
        'accent-button': {
          light: '#FF6F61',
          dark: '#1A237E'
        },
        'secondary-white': '#FFF7EC',
        background: {
          light: '#D0E7B9',
          dark: '#8C9EFF'
        },
        'bg-avatar': {
          light: '#A3D076',
          dark: '#657CFF'
        }
      },
      fontWeight: {
        bold: 800
      }
    }
  },
  plugins: []
};
