module.exports = {
  important: true,
  purge: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-white':'#F8F8FA',
        'custom-blue-midnight':'#003265',
        'custom-blue-prussian':'#00335B',
        'custom-blue-bondie':'#169BB2',
        'custom-blue-200':'#224877',
        'custom-blue-300':'#202C46',
        'custom-blue-400':'#171D2D',
        'custom-aguamarina-100': '#00D8D8',
        'custom-aguamarina-200':'#2CD0C7',
        'custom-aguaarina-300':'#39D2C0',
        'custom-aguamarina-400':'#4CBFC4',
 
        'custom-green-50': '#17CC8E',
        'custom-green-turquese-50':'#15FEE6',
        'custom-green-turquese-100':'#17F9E1',
        'custom-green-100':'#21D596',
        'custom-morado':'#8781EF',
        'custom-morado-100':'#7568F0',


      }
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      backgroundColor: ['responsive', 'hover','group-focus','visited','checked'],
      outline: ['hover', 'active'],
      translate: ['motion-safe'],
      textColor: ['visited'],
      textDecoration: ['focus-visible'],
      rotate: ['active', 'group-hover'],
      transformOrigin: ['hover', 'focus'],
      transform: ['hover', 'focus'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      transitionDelay: ['hover', 'focus'],    
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
