/* eslint-disable react/jsx-filename-extension */

import 'app/index.sass'

import React                    from 'react'
import { Provider }             from 'react-redux'
import { Router, Route }        from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routes      from 'app/routes'
import history     from 'app/history'
import createStore from 'app/store'

/**
 * Application store.
 *
 * @type {Object}
 */
const store = createStore(history)

/**
 * The application root element.
 *
 * @type {JSX}
 */
const application = (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(history, store)}>
      {routes}
    </Router>
  </Provider>
)

export default application
