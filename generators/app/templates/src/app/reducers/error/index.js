import createReducer from 'app/utils/create-reducer'
import { ADD_ERROR, REMOVE_ERROR } from 'app/actions/error'


const handlers = {
  [ADD_ERROR]:    (state, action) => state.concat(action.payload),
  [REMOVE_ERROR]: (state, action) => state.filter(err => err.origin === action.payload),
}

export const initialState = []

export default createReducer(handlers, initialState)
