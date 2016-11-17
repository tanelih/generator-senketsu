import createReducer from 'app/utils/create-reducer'

/**
 * Stores the 'in-progress' actions in a set. You can customize this to only include a certain
 * subset of actions by, for example, whitelisting what actions get stored.
 *
 * @param   {Array<String>} state  - Current state.
 * @param   {Object}        action - Flux standard action.
 * @returns {Array<String>}        - The next state.
 */
export default function progress (state = [], action) {
  if (action.type === 'ERROR') {
    return state.filter(v => v !== action.payload.origin)
  }
  if (action.type.endsWith('_SUCCESS')) {
    const i = action.type.lastIndexOf('_SUCCESS')
    return state.filter(v => v !== action.type.substr(0, i))
  }
  return state.indexOf(action.type) >= 0
    ? state
    : state.concat(action.type)
}
