import createActionCreator from 'app/utils/create-action-creator'

<%_ actions.forEach(function(action) { _%>
export const <%= action.constant %> = '<%= action.constant %>'
  <%_ if(action.async) { _%>
export const <%= action.constant %>_SUCCESS = '<%= action.constant %>_SUCCESS'
  <%_ } _%>
<%_ }) _%>
<%_ actions.forEach(function(action) { _%>
  <%_ if(action.async) { _%>

/**
 *
 */
export const <%= action.creator %> = createActionCreator(<%= action.constant %>,
  () =>
  (dispatch, getState) => {
    dispatch(<%= action.constant %>)
  })
  <%_ } else { _%>

/**
 *
 */
export const <%= action.creator %> = createActionCreator(<%= action.constant %>)
  <%_ } _%>
<%_ }) _%>
