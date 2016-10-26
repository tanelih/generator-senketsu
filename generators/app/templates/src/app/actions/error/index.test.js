/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */

import test            from 'ava'
import thunk           from 'redux-thunk'
import createMockStore from 'redux-mock-store'

import { addError } from 'app/actions/error'


const mockStore = createMockStore([thunk])

test('actions/error::addError', t => {
  const store = mockStore([])
  store.dispatch(addError({ origin: 'SAMPLE_ACTION', instance: new Error('test') }))

  return t.deepEqual(store.getActions(), [
    { type: 'ADD_ERROR', payload: { origin: 'SAMPLE_ACTION', instance: new Error('test') } },
  ])
})
