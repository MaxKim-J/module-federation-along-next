const { ModuleFederationPlugin } = require('webpack').container;
const { ProvidePlugin } = require('webpack');
const packageJson = require('./package.json');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = ({ standalone, env }) => {
  const PRODUCTION = env === 'production';
  const isStandalone = Boolean(standalone);

  const plugins = [
    new ProvidePlugin({
      React: 'react',
    }),
  ];

  if (isStandalone) {
    plugins.push(
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyJS: true,
        },
        hash: false,
      })
    );
  } else {
    plugins.push(
      new ModuleFederationPlugin({
        name: 'calculatorEntry',
        filename: 'remoteEntry.js',
        exposes: {
          './Calculator': './src/Calculator.tsx',
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
      })
    );
  }

  return {
    mode: env,
    entry: isStandalone ? './bootstrap.tsx' : './index.tsx',
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
      port: 3003,
      open: true,
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
    plugins,
  };
};

module.exports = webpackConfig;
