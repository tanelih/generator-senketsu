import createReducer from 'app/utils/create-reducer'

/**
 * Initial state for the reducer.
 *
 * @type {String}
 */
export const initialState = 'en'

/**
 * Map of handlers.
 *
 * @type {Object}
 */
const handlers = {
  SET_LOCALE: (locale, action) => action.payload
}

export default createReducer(handlers, initialState)
