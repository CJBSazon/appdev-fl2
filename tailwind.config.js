module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://eos.com/wp-content/uploads/2023/04/rice-field.jpg')",
        'hero-pattern': "url('images/rf-1.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  }
}