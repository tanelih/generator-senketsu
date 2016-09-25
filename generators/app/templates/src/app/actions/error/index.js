import createActionCreator from 'app/utils/create-action-creator'

/**
 * Store a new error in the application state.
 *
 * @returns {FSA} - Flux standard action.
 */
export const addError = createActionCreator('ADD_ERROR')

/**
 * Remove given errors from application state.
 *
 * @returns {FSA} - Flux standard action.
 */
export const removeError = createActionCreator('REMOVE_ERROR')
