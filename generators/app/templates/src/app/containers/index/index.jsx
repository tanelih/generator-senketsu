import 'app/containers/index/style.sass'

import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'

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
    return (
      <article className="index-container">
        <Link to="/foo">Foo</Link>
        {this.context.translate('GREETING', 'FOR_YOU')}
        <pre>
          {JSON.stringify(this.props.route, null, 2)}
        </pre>
      </article>
    )
  },
})

const smart = connect(
  state => ({

  }))

export default smart(translate(IndexContainer, require('app/localization.json')))
