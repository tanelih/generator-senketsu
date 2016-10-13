import * as redux  from 'redux'

import thunk   from 'redux-thunk'
import logger  from 'redux-logger'

import * as router      from 'react-router'
import * as reduxRouter from 'react-router-redux'


/**
 * Redux store containing the application state.
 *
 * @param   {Object} history - Depending on whether we're at the server or in
 *                             the browser, this might be something else.
 * @returns {Object}         - Redux store.
 */
export default function createStore(history) {
  const store = redux.createStore(
    redux.combineReducers(require('app/reducers')),
    redux.applyMiddleware(
      reduxRouter.routerMiddleware(history),
      thunk,
      logger()
    )
  )

  if (module.hot) {
    module.hot.accept('app/reducers', () =>
      store.replaceReducer(redux.combineReducers(require('app/reducers'))))
  }

  return store
}

