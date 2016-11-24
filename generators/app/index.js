'use strict'

var ce = require('command-exists')
var yo = require('yeoman-generator')

/**
 * Generate a project skeleton.
 */
module.exports = yo.Base.extend({

  prompting: function() {
    var self = this
    var done = this.async()

    var options = [
      {
        type:    'input',
        name:    'name',
        message: 'Project name',
      },
      {
        type:    'input',
        name:    'description',
        message: 'Project description',
      }
    ]

    this.prompt(options, function(props) {
      self.props = props
      return done()
    })
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src'))

    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc'))

    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'))

    this.fs.copyTpl(
      this.templatePath('yarn.lock'),
      this.destinationPath('yarn.lock'))

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), this.props)

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'), this.props)
  },

  install: function() {
    var self = this
    ce('yarn', function(err, exists) {
      if (exists) {
        return self.spawnCommand('yarn', ['install'])
      }
      return self.npmInstall()
    })
  }
})
