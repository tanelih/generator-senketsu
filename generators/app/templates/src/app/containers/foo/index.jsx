import 'app/containers/foo/style.sass'

import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'

import translate from 'app/hoc/translate'


/**
 * @class
 *
 * Container for the 'foo' view.
 */
export const FooContainer = React.createClass({
  propTypes: {
    route: PropTypes.object.isRequired,
  },
  contextTypes: {
    translate: PropTypes.func.isRequired,
  },
  render() {
    return (
      <article className="foo-container">
        <Link to="/">Index</Link>
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

export default smart(translate(FooContainer, require('app/localization.json')))
