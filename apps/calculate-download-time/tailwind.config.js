const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
