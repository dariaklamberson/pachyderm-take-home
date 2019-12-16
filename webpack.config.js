var path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'frontend.js',
    libraryTarget: 'umd'
  },

  /*
  devServer: {
    contentBase: path.resolve(__dirname),
    compress: true,
    port: 9000,
    host: 'localhost',
    open: true
  },
  */

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
