import 'app/index.sass'

import React                    from 'react'
import { Provider }             from 'react-redux'
import { Router, Route }        from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store   from 'app/store'
import history from 'app/history'


const application = (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(history, store)}>
      <Route
        path="/"
        getComponent={(location, done) =>
          require.ensure([], require =>
            done(null, require('app/containers/index').default))
        }
      />
      <Route
        path="/foo"
        getComponent={(location, done) =>
          require.ensure([], require =>
            done(null, require('app/containers/foo').default))
        }
      />
    </Router>
  </Provider>
)

export default application

