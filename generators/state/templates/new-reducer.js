import createReducer from 'app/utils/create-reducer'

/**
 * Initial state for the reducer.
 *
 * @type {<%= initialStateType %>}
 */
export const initialState = <%- initialState %>

/**
 * Map of handlers.
 *
 * @type {Object}
 */
const handlers = {
  <%_ actions.forEach(function(action) { _%>
    <%_ if(action.async) { _%>
    <%= action.constant %>_SUCCESS: (state, action) => state,
    <%_ } else { _%>
    <%= action.constant %>: (state, action) => state,
    <%_ } _%>
  <%_ }) _%>
}

export default createReducer(handlers, initialState)
