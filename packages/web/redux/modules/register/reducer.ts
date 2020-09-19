import {
  RegisterActionTypes,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD
} from './action-type'

interface InitialState {
  nickName: string
  email: string
  password: string
}

const initialState: InitialState = { nickName: '', email: '', password: '' }

export const RegisterReducer = (
  state = initialState,
  action: RegisterActionTypes
): InitialState => {
  switch (action.type) {
    case INPUT_NICKNAME:
      const { nickName } = action.payload
      return { ...state, nickName }

    case INPUT_EMAIL:
      const { email } = action.payload
      return { ...state, email }

    case INPUT_PASSWORD:
      const { password } = action.payload
      return { ...state, password }

    default:
      return state
  }
}
