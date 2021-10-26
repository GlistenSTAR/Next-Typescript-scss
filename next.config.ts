import withSass from '@zeit/next-sass';

const config = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

module.exports = withSass(config);