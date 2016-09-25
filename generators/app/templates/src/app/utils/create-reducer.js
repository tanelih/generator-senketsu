import recycle           from 'redux-recycle'
import { handleActions } from 'redux-actions'

/**
 * Create a reducer with reset capabilities.
 *
 * @param   {Object}        handlers     - Hash of handlers.
 * @param   {Object}        initialState - Initial state.
 * @param   {Array<String>} resetOn      - Actions to reset the reducer state on.
 * @returns {Function}                   - Reducer function.
 */
export default function createReducer(handlers, initialState, resetOn = []) {
  return recycle(handleActions(handlers, initialState), resetOn, initialState)
}
