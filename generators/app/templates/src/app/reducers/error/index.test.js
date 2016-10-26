/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */

import test from 'ava'
import reducer, { initialState } from 'app/reducers/error'

test('reducers/error', t => {
  return t.deepEqual(reducer(undefined, { type: 'FOO' }), initialState)
})
