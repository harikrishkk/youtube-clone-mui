const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@data': path.join(path.resolve(__dirname, './src/data')),
      '@navigation': path.join(path.resolve(__dirname, './src/navigation')),
      '@themes': path.join(path.resolve(__dirname, './src/themes')),
      '@hooks': path.join(path.resolve(__dirname, './src/hooks')),
    },
  },
};
