/* global __dirname */

const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dirJs = path.resolve(__dirname, 'js');
const dirHtml = path.resolve(__dirname, 'html');
const dirBuild = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(dirJs, 'main.js'),
  output: {
    path: dirBuild,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: dirBuild,
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: dirJs,
      },
    ],
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      { from: dirHtml }, // to: output.path
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  stats: {
    // Nice colored output
    colors: true,
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
