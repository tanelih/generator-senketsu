import createActionCreator from 'app/utils/create-action-creator'

/**
 * Set the current locale of the application.
 *
 * @returns {FSA} - Flux standard action.
 */
export const setLocale = createActionCreator('SET_LOCALE')
