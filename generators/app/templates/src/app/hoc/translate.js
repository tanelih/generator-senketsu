import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'

/**
 * Make sure given target is an object.
 */
const isObject = target =>
	!Array.isArray(target) &&
	!(target instanceof String) &&
	!!target && typeof target === 'object'

/**
 * Reduction for reading a property.
 */
const getDeepResource = (localization, key) => {
  if (!localization) return

  if ((isObject(localization[key]) || typeof localization[key] === 'string')) {
    return localization[key]
  }
}

/**
 * Wrap given component to provide a 'translate' context.
 *
 * @param   {Function} component - The component to wrap.
 * @param   {Object}   resource  - The translation resource object.
 * @returns {Function}           - The wrapped component.
 */
export default function translate(component, resource = {}) {

  /**
   * @class
   *
   * Context-providing component to wrap the subcomponent.
   */
  const Translator = React.createClass({
    propTypes: {
      locale: PropTypes.string.isRequired,
    },

    childContextTypes: {
      translate: PropTypes.func.isRequired,
    },

    getChildContext() {
      return {
        translate: (...keys) => {
          const translation = keys.concat(this.props.locale).reduce(getDeepResource, resource)

          return translation
            ? translation
            : `Missing translation for [${keys.concat(this.props.locale).join(' >> ')}]`
        }
      }
    },

    render() {
      return React.createElement(component, this.props)
    },
  })

  const smart = connect(
    state => ({
      locale: state.locale,
    }))

  return smart(Translator)
}
