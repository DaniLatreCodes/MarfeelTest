const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: {main: [
    '@babel/polyfill',
    './src/index.js',
  ]},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build'
  },

  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        loader: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          'sass-loader'
        ]
      }
    ]
  },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'index.html'),
        inject: 'body',
        hash: true
      }),
      new MiniCSSExtractPlugin()
    ]
}