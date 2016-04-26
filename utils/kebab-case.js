var casing = require('change-case')

module.exports = function kebabCase(str) {
  return casing.sentenceCase(str).replace(/ /g, '-')
}
