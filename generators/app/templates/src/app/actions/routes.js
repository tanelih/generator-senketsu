/**
 * Application routes.
 *
 * @type {Array<Object>}
 */
export default [
  {
    getComponent(location, done) {
      require.ensure([], require =>
        done(null, require('app/containers/index').default))
    },
    path: '/'
  }
]

