'use strict'

var path              = require('path')
var webpack           = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-redux',
    ],
    app: 'index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('app.bundle.css', {
      disable: process.env.NODE_ENV !== 'production'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
  resolve: {
    root: [
      path.resolve('src'),
      path.resolve('node_modules')
    ],
    extensions: [ '', '.js', '.jsx' ],
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!sass-loader?indentedSyntax=true'
        ),
      },
    ],
  },
  postcss: function() {
    return [require('autoprefixer')]
  },
}
