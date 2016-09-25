import 'app/<%= type %>s/<%= file %>/style.sass'

import React, { PropTypes } from 'react'
<%_ if(isSmart) { _%>
import { connect }          from 'react-redux'
<%_ } _%>


/**
 * @class
 *
 * TODO Document me!
 */
export const <%= name %> = React.createClass({
  render() {
    return (
      <div className="<%= file %>-<%= type %>" />
    )
  },
})

<%_ if(isSmart) { _%>
const smart = connect(
  state => ({

  }),
  dispatch => ({

  }))

export default smart(<%= name %>)
<%_ } else { _%>
export default <%= name %>
<%_ } _%>
