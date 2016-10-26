import 'app/<%= type %>s/<%= file %>/style.sass'

import React       from 'react'
<%_ if (isContainer) { _%>
import { connect } from 'react-redux'

import translate from 'app/hoc/translate'
<%_ } _%>

/**
 * @class
 *
 * TODO Documentation
 */
<%_ if (isStateful) { _%>
export class <%= name%> extends React.Component {

  static propTypes = {

  }

<%_ if (hasContext && isContainer) { _%>
  static contextTypes = {
    translate: React.PropTypes.func.isRequired,
  }
<%_ } _%>

  getInitialState () => {
    return {

    }
  }

  render () => {
    return (
      <div className="<%= file %>-<%= type %>" />
    )
  }
})
<%_ } else { _%>
  <%_ if (hasContext) { _%>
export const <%= name %> = (props, context) => (
  <%_ } else { _%>
export const <%= name %> = props => (
  <%_ } %>
  <div className="<%= file %>-<%= type %>" />
)

<%= name %>.propTypes = {

}

  <%_ if (hasContext && isContainer) { _%>
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
