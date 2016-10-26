import createActionCreator from 'app/utils/create-action-creator'


<%_ actions.forEach(function(action) { _%>
  <%_ if(action.async) { _%>
/**
 * TODO Documentation
 *
 * @returns {FSA} - Flux standard action.
 */
export const <%= action.creator %> = () => (dispatch, getState) => {
  dispatch({ type: '<%= action.constant %>_SUCCESS' })
})
  <%_ } else { _%>

/**
 * TODO Documentation
 *
 * @returns {FSA} - Flux standard action.
 */
export const <%= action.creator %> = createActionCreator('<%= action.constant %>')
  <%_ } _%>
<%_ }) _%>
