/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */

import test from 'ava'
import reducer, { initialState } from 'app/reducers/<%= name %>'

test('reducers/<%= name %>', t => {
  return t.deepEqual(reducer(undefined, { }), initialState)
})
