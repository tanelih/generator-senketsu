import 'app/<%= type %>s/<%= file %>/style.sass'

<%_ if (isContainer) { _%>
import React       from 'react'
import { connect } from 'react-redux'

import translate from 'app/hoc/translate'
<%_ } else { _%>
import React from 'react'
<%_ } _%>

/**
 * @class
 *
 * TODO Documentation
 */
<%_ if (isStateful || isContainer) { _%>
export class <%= name%> extends React.Component {

  static propTypes = {

  }
<%_ if (hasContext) { _%>

  static contextTypes = {
    translate: React.PropTypes.func.isRequired,
  }
<%_ } _%>
<%_ if (isStateful) { _%>

  state = {

  }
<%_ } _%>

  render() {
    return (
      <div className="<%= file %>-<%= type %>" />
    )
  }
}

<%_ } else { _%>
<%_ if (hasContext) { _%>
export const <%= name %> = (props, context) => (
<%_ } else { _%>
export const <%= name %> = props => (
<%_ } _%>
  <div className="<%= file %>-<%= type %>" />
)

<%= name %>.propTypes = {

}
<%_ if (hasContext) { _%>

<%= name %>.contextTypes = {
  translate: React.PropTypes.func.isRequired,
}
<%_ } _%>
<%_ } _%>

<%_ if (isContainer) { _%>
const smart = connect(
  state => ({

  }),
  dispatch => ({

  })
)

export default translate(smart(<%= name %>), 'app/localization.json')
<%_ } else { _%>
export default <%= name %>
<%_ } _%>
