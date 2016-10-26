import { routerReducer } from 'react-router-redux'

export default {
  /**
   * Vendor reducers.
   */
  routing: routerReducer,

  /**
   * Custom reducers.
   */
  errors:   require('app/reducers/error').default,
  locale:   require('app/reducers/locale').default,
  progress: require('app/reducers/progress').default,
}
