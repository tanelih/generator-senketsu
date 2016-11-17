/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */

const path = require('path')
const express = require('express')

const React = require('react')
const ReactDOM = require('react-dom/server')
const Provider = require('react-redux').Provider
const RouterContext = require('react-router').RouterContext

const match = require('react-router').match
const createMemoryHistory = require('react-router').createMemoryHistory
const syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore

const routes = require('app/routes').default
const createStore = require('app/store').default

/**
 * HTML template to use for rendering stuffs.
 *
 * @param   {String} content - HTML content.
 * @param   {Object} state   - Initial state for the application.
 * @returns {String}         - The rendered view.
 */
const template = (content, state) => `
  <html>
    <head>
      <meta charset="UTF-8">
      <title>SENKETSU</title>
      <link rel="stylesheet" type="text/css" href="/build/app.bundle.css">
      <script>
        window.APP_INITIAL_STATE = ${JSON.stringify(state)}
      </script>
    </head>
    <body>
      <div id="app">
        ${content}
      </div>
      <script src="/build/vendor.bundle.js"></script>
      <script src="/build/app.bundle.js"></script>
    </body>
  </html>
`

/**
 * Express application.
 *
 * @type {Object}
 */
express()

  .use('/build',
    express.static(path.join(__dirname, '../../build')))

  .use((req, res, next) => {
    const location = req.url
    const memhistory = createMemoryHistory(location)
    const store = createStore(memhistory)
    const history = syncHistoryWithStore(memhistory, store)

    match({ history, routes, location }, (err, redirect, props) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      if (redirect) {
        return res.redirect(302, redirect.pathName + redirect.search)
      }
      if (!props) {
        return next()
      }

      const application = (
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      )

      return res.send(template(ReactDOM.renderToString(application), store.getState()))
    })
  })

  .listen(process.env.PORT || 3000,
    () => console.log(`Listening at ${process.env.PORT || 3000}`))
