const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const packageJson = require('./package.json');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, options) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new ModuleFederationPlugin({
          name: 'host',
          remotes: {
            // 여기 URL 커스텀해주면 거기서 가져오겠지?
            todoEntry: 'todoEntry@http://localhost:3002/remoteEntry.js',
          },
        }),
      ],
    };
  },
};

module.exports = withBundleAnalyzer(nextConfig);
