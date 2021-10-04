/** @type {import('next').NextConfig} */
module.exports = {
  target: 'serverless',
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname); // 추가
    return config;
  },
};
