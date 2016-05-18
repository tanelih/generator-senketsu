import test from 'ava'

import reducer, { initialState } from 'app/reducers/route'

test('reducers/route', t => {
  return t.deepEqual(reducer(undefined, { }), initialState)
})
