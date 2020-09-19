import { combineReducers } from 'redux'

import { LoginReducer } from './modules/login/reducer'
import { RegisterReducer } from './modules/register/reducer'

export const rootReducer = combineReducers({
  login: LoginReducer,
  register: RegisterReducer
})

export type RootState = ReturnType<typeof rootReducer>
