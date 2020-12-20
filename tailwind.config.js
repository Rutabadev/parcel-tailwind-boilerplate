const colors = require('tailwindcss/colors');

module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            primary: colors.indigo,
            secondary: colors.yellow,
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
