import * as reduxRouter from 'react-router-redux'

export default {
  /**
   * Vendor reducers.
   */
  routing: reduxRouter.routerReducer,

  /**
   * Custom reducers.
   */
  errors: require('app/reducers/error').default,
  locale: require('app/reducers/locale').default,
}
