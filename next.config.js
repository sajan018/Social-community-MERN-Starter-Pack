const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
   domains:['img.clerk.com']
  },
  webpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'components'),
    };
    return config;
  },
};

module.exports = nextConfig;
