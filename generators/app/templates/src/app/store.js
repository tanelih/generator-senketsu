import * as redux  from 'redux'

import thunk   from 'redux-thunk'
import logger  from 'redux-logger'

import * as router      from 'react-router'
import * as reduxRouter from 'react-router-redux'

let createStore = redux.applyMiddleware(
  reduxRouter.routerMiddleware(router.browserHistory),
  thunk,
  logger()
)
createStore = createStore(redux.createStore)


const store = createStore(redux.combineReducers(require('app/reducers')))

if (module.hot) {
  module.hot.accept('app/reducers', () =>
    store.replaceReducer(redux.combineReducers(require('app/reducers'))))
}

/**
 * Redux store containing the application state.
 *
 * @type {Object}
 */
export default store
