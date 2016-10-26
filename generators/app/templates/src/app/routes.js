// we have to do some hacks on the server side to get code splitting to behave
// the same way as it does in the browser
if (typeof require.ensure !== 'function') {
  require.ensure = (deps, callback) => callback(require)
}

/**
 * Route configuration for the application.
 *
 * @type {Array<Object>}
 */
export default [
  {
    getComponent(location, done) {
      require.ensure([], require =>
        done(null, require('app/containers/index').default))
    },
    path: '/',
  },
]
