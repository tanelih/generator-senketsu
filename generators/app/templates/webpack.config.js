'use strict'

var path              = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  plugins: [
    new ExtractTextPlugin('bundle.css', { disable: process.env.NODE_ENV !== 'production' }),
  ],
  resolve: {
    root: [ path.resolve('src'), path.resolve('node_modules') ],
    extensions: [ '', '.js', '.jsx' ],
  },
  module: {
    loaders: [
      {
        test:   /\.sass$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader!postcss-loader!sass-loader?indentedSyntax=true'),
      },
    ],
  },
  postcss: function() {
    return [require('autoprefixer')]
  },
}
