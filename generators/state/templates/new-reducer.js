import createReducer from 'app/utils/create-reducer'


const handlers = {
  <%_ actions.forEach(function(action) { _%>
    <%_ if(action.async) { _%>
    <%= action.constant %>_SUCCESS: (state, action) => state,
    <%_ } else { _%>
    <%= action.constant %>: (state, action) => state,
    <%_ } _%>
  <%_ }) _%>
}

export const initialState = <%= initialState %>

export default createReducer(handlers, initialState)
