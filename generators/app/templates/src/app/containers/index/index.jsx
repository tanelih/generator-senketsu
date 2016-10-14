import 'app/containers/index/style.sass'

import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'

import translate from 'app/hoc/translate'

/**
 * @class
 *
 * Container for the 'index' view.
 */
export const IndexContainer = React.createClass({
  propTypes: {
    route: PropTypes.object.isRequired,
  },
  contextTypes: {
    translate: PropTypes.func.isRequired,
  },
  render() {
    console.log(this.props.route)
    return (
      <article className="index-container">
        {this.context.translate('GREETING', 'FOR_YOU')}
      </article>
    )
  },
})

/**
 * Redux store bindings.
 *
 * @type {Function}
 */
const smart = connect(
  state => ({

  })
)

export default smart(translate(IndexContainer, require('app/localization.json')))
