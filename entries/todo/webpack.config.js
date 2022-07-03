const { ModuleFederationPlugin } = require('webpack').container;
const { ProvidePlugin } = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');
const packageJson = require('./package.json');
const path = require('path');

const webpackConfig = ({ target, env }) => {
  const PRODUCTION = env === 'production';

  return {
    mode: env,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3002,
    },
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            minify: true,
            target: ['chrome62', 'safari14'],
          },
        },
      ],
    },
    plugins: [
      new ProvidePlugin({
        React: 'react',
      }),
      new ModuleFederationPlugin({
        name: 'todoEntry',
        filename: 'remoteEntry.js',
        exposes: {
          './Todo': './src/Todo.tsx',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: packageJson.dependencies['react'],
          },
          'react-dom': {
            singleton: true,
            requiredVersion: packageJson.dependencies['react-dom'],
          },
        },
      }),
    ],
  };
};

module.exports = webpackConfig;
