import 'app/containers/index/style.sass'

import React       from 'react'
import { connect } from 'react-redux'

import translate from 'app/hoc/translate'

/**
 * @class
 *
 * Container for the 'index' view.
 */
export class IndexContainer extends React.Component {

  static contextTypes = {
    translate: React.PropTypes.func.isRequired,
  }

  render = () => (
    <article className="index-container">
      {this.context.translate('GREETING', 'FOR_YOU')}
    </article>
  )
}


const smart = connect(
  state => ({

  }),
  dispatch => ({

  })
)

export default smart(translate(IndexContainer, require('app/localization.json')))
