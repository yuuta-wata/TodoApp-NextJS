import {} from 'rxjs'
import { mapTo } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'

import { TEST_PUSH, TEST_OBSERVABLE } from './action-type'

export const loginEpic: Epic = action$ =>
  action$.pipe(ofType(TEST_PUSH), mapTo({ type: TEST_OBSERVABLE }))
