import test from 'ava'

import reducer, { initialState } from 'app/reducers/locale'

test('reducers/locale', t => {
  return t.deepEqual(reducer(undefined, { type: 'FOO' }), initialState)
})
