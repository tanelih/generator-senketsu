/* eslint-disable global-require */

const path              = require('path')
const webpack           = require('webpack')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = process.env.npm_lifecycle_event === 'build'
  ? 'production'
  : 'development'

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-redux',
    ],
    app: 'index.js',
  },
  output: {
    path:     path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new ExtractTextPlugin('app.bundle.css', {
      disable:   process.env.NODE_ENV !== 'production',
      allChunks: true,
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code:     true,
        drop_console:  true,
        drop_debugger: true,
      },
      mangle:    true,
      comments:  false,
      sourceMap: false,
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
  resolve: {
    root: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test:   /\.sass$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!sass-loader?indentedSyntax=true'
        ),
      },
    ],
  },
  postcss() {
    return [
      require('autoprefixer'),
      require('postcss-assets')({ loadPaths: ['src/res'] }),
      require('postcss-font-magician'),
    ]
  },
  sassConfig: {
    importer: require('node-sass-importer'),
  },
}
