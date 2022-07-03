const packageJson = require('./package.json');
const { remotes } = require('../remote.config');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const getRemoteEntryUrl = (remotes) => {
  const urlType = process.env.NODE_ENV === 'production' ? 'prodUrl' : 'devUrl';
  const remotesEntries = Object.keys(remotes).map((key) => [
    key,
    remotes[key][urlType],
  ]);

  return Object.fromEntries(remotesEntries);
};

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
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
          remotes: getRemoteEntryUrl(remotes),
        }),
      ],
    };
  },
};

module.exports = withBundleAnalyzer(nextConfig);
