import test from 'ava'

import thunk           from 'redux-thunk'
import createMockStore from 'redux-mock-store'

import { setLocale } from 'app/actions/locale'


const mockStore = createMockStore([thunk])

test('actions/locale::setLocale', t => {
  const store = mockStore('en')
  store.dispatch(setLocale('en'))

  return t.deepEqual(store.getActions(), [
    { type: 'SET_LOCALE', payload: 'en' },
  ])
})
