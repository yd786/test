// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    purge: [
        './src/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
              customBlack: '#464646',
              customBlue:'#1A4558'
            }
        }
    },
    variants: {}
};
