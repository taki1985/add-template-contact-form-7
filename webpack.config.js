const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/../../../plugins/add-template-for-contact-form-7/assets',
    filename: '[name].js',
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
