import {
  LoginActionType,
  INPUT_USER_EMAIL,
  INPUT_USER_PASSWORD,
  TEST_OBSERVABLE
} from './action-type'

interface InitialState {
  email: string
  password: string
  test: string
}

const initialState: InitialState = { email: '', password: '', test: '' }

export const LoginReducer = (
  state = initialState,
  action: LoginActionType
): InitialState => {
  switch (action.type) {
    case INPUT_USER_EMAIL:
      const { email } = action.payload
      return { ...state, email }

    case INPUT_USER_PASSWORD:
      const { password } = action.payload
      return { ...state, password }

    case TEST_OBSERVABLE:
      return { ...state, test: 'TEST_OBSERVABLE' }

    default:
      return state
  }
}
