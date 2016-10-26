/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */

import test    from 'ava'
import reducer from 'app/reducers/progress'

test('reducers/progress', t => {
  const state = reducer(undefined, { type: 'LOGIN' })
  return t.deepEqual(state, ['LOGIN'])
})

test('reducers/progress::success', t => {
  let state
  state = reducer(state, { type: 'LOGIN' })
  state = reducer(state, { type: 'LOGIN_SUCCESS' })
  return t.deepEqual(state, [])
})

test('reducers/progress::error', t => {
  let state
  state = reducer(state, { type: 'LOGIN' })
  state = reducer(state, { type: 'ERROR', payload: { origin: 'LOGIN' } })
  return t.deepEqual(state, [])
})
