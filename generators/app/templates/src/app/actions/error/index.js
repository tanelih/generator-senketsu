import createActionCreator from 'app/utils/create-action-creator'

/**
 * Remove given error type from application state.
 *
 * @returns {FSA} - Flux standard action.
 */
export const clearError = createActionCreator('CLEAR_ERROR')
