const path = require('path')
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development'
});

const nextConfig = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
});

module.exports = nextConfig;