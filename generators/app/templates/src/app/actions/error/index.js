import createActionCreator from 'app/utils/create-action-creator'


export const ADD_ERROR    = 'ADD_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export const addError    = createActionCreator(ADD_ERROR)
export const removeError = createActionCreator(REMOVE_ERROR)
