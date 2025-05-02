module.exports = {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'blue': {
          900: '#1E3A8A', // Royal Blue
        },
        'yellow': {
          500: '#D4AF37', // Gold
        },
        'coral': {
          500: '#FF6B6B', // Bright Coral
          600: '#FF5252', // Darker Coral for hover states
        },
        'gray': {
          100: '#F3F4F6', // Light Gray
          800: '#1F2937', // Dark Gray
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}