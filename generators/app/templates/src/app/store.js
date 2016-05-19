import * as redux  from 'redux'

import thunk   from 'redux-thunk'
import logger  from 'redux-logger'

import * as router      from 'react-router'
import * as reduxRouter from 'react-router-redux'

const createStore =
  redux.applyMiddleware(
    reduxRouter.routerMiddleware(router.browserHistory), thunk, logger())(redux.createStore)

const store = createStore(redux.combineReducers(require('app/reducers').default))

if (module.hot) {
  module.hot.accept('app/reducers', () =>
    store.replaceReducer(redux.combineReducers(require('app/reducers').default)))
}

export default store
