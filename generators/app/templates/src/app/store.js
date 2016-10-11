import * as redux  from 'redux'

import thunk   from 'redux-thunk'
import logger  from 'redux-logger'

import * as router      from 'react-router'
import * as reduxRouter from 'react-router-redux'


/**
 * Redux store containing the application state.
 *
 * @type {Object}
 */
const store = redux.createStore(
  redux.combineReducers(require('app/reducers')),
  redux.applyMiddleware(
    reduxRouter.routerMiddleware(require('app/history')),
    thunk,
    logger()
  )
)

if (module.hot) {
  module.hot.accept('app/reducers', () =>
    store.replaceReducer(redux.combineReducers(require('app/reducers'))))
}


export default store
