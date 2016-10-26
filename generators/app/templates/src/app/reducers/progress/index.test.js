/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */

import test from 'ava'
import reducer, { initialState } from 'app/reducers/progress'

test('reducers/progress', t => {
  return t.deepEqual(reducer(undefined, { }), initialState)
})
