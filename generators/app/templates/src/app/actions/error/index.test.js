/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */

import test            from 'ava'
import thunk           from 'redux-thunk'
import createMockStore from 'redux-mock-store'

import { clearError } from 'app/actions/error'

const mockStore = createMockStore([thunk])

test('actions/error::clearError', t => {
  const store = mockStore([])
  store.dispatch(clearError('LOGIN'))

  return t.deepEqual(store.getActions(), [
    { type: 'CLEAR_ERROR', payload: 'LOGIN' },
  ])
})
