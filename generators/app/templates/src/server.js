process.env.BABEL_ENV = 'production'

// use the same 'non-relative' paths as the client does
require('app-module-path').addPath(__dirname)

// make sure we can work with the client side code
require('ignore-styles')
require('babel-register')

// start the server
require('server/index')
