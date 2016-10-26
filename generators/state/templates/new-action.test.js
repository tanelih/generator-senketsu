/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */

import test            from 'ava'
import thunk           from 'redux-thunk'
import createMockStore from 'redux-mock-store'

import {
<%_ actions.forEach(function(action) { _%>
  <%= action.creator %>,
<%_ }) _%>
} from 'app/actions/<%= name %>'


const mockStore = createMockStore([ thunk ])

<%_ actions.forEach(function(action) { _%>
test.skip('actions/<%= name %>#<%= action.creator %>', t => {
  return t.fail()
})
<%_ }) _%>
