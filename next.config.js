const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    domains: ['static.upbit.com', 'localhost'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/styles')],
  },
};
