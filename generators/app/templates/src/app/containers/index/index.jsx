import 'app/containers/index/style.sass'

import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'

import translate from 'app/hoc/translate'

/**
 * @class
 *
 * Container for the 'index' view.
 */
export const IndexContainer = (props, context) => (
  <article className="index-container">
    {context.translate('GREETING', 'FOR_YOU')}
  </article>
)

IndexContainer.contextTypes = {
  translate: PropTypes.func.isRequired,
}


const smart = connect(
  state => ({

  }),
  dispatch => ({

  })
)

export default smart(translate(IndexContainer, require('app/localization.json')))
