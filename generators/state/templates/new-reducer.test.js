import test from 'tape'
import reducer, { initialState } from 'app/reducers/<%= name %>'


test('reducers/<%= name %>', t => {
  t.test('should initialize correctly', t => {
    t.deepEqual(reducer(undefined, { }), initialState)
    return t.end()
  })
  return t.end()
})
