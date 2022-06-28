const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container
const packageJson = require('package.json')

const webpackConfig = ({ target, env }) => {
  const PRODUCTION = env === 'production';
  const constantKey = env === 'production' ? 'prod' : 'dev';

  return {
    mode: env,
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          loader: 'esbuild-loader',
          options: {
            loader:'tsx',
            target: 'es2015'
          }
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "todo-entries",
        filename: "remoteEntry.js",
        exposes: {
          "./Todo": "./src/Todo.tsx",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: packageJson.dependencies["react"]
          },
          "react-dom": {
            singleton: true,
            requiredVersion: packageJson.dependencies["react-dom"]
          }
        }
      }),
    ],
    devServer: {
      compress: true,
      port: 3002
    },
  };
};

module.exports = webpackConfig;
