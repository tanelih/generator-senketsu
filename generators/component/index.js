'use strict'

var yo        = require('yeoman-generator')
var casing    = require('change-case')
var kebabCase = require('../../utils/kebab-case')

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
        message: 'Component name (PascalCase)',
      },
      {
        type:    'list',
        name:    'type',
        message: 'Type of component',
        choices: [ 'view', 'component' ],
      },
      {
        type:    'checkbox',
        name:    'options',
        message: 'Component options',
        choices: [
          { name: 'Smart' },
        ],
      }
    ]

    this.prompt(options, function(props) {
      self.props = props
      return done()
    })
  },

  writing: function() {
    var file    = kebabCase(this.props.name.trim())
    var isSmart = this.props.options.indexOf('Smart') >= 0

    var context = {
      file:    file,
      type:    this.props.type,
      name:    casing.pascalCase(this.props.name.trim()),
      isSmart: isSmart,
    }

    var path = 'src/app/' + this.props.type + 's/' + file + '/'

    this.fs.copyTpl(
      this.templatePath('new-component.jsx'),
      this.destinationPath(path + 'index.jsx'),
      context
    )

    this.fs.copyTpl(
      this.templatePath('new-component.sass'),
      this.destinationPath(path + 'style.sass'),
      context
    )
  },
})
