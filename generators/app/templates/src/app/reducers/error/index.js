import createReducer from 'app/utils/create-reducer'

/**
 * Initial state for the reducer.
 *
 * @type {Array}
 */
export const initialState = []

/**
 * Map of handlers.
 *
 * @type {Object}
 */
const handlers = {
  ERROR:       (state, action) => state.concat(action.payload),
  CLEAR_ERROR: (state, action) => state.filter(err => err.origin !== action.payload),
}

export default createReducer(handlers, initialState)
