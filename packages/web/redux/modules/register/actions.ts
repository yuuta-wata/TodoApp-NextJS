import {
  RegisterActionTypes,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD
} from './action-type'

export const ChangeNickName = (nickName: string): RegisterActionTypes => ({
  type: INPUT_NICKNAME,
  payload: {
    nickName
  }
})

export const ChangeEmail = (email: string): RegisterActionTypes => ({
  type: INPUT_EMAIL,
  payload: {
    email
  }
})

export const ChangePassword = (password: string): RegisterActionTypes => ({
  type: INPUT_PASSWORD,
  payload: {
    password
  }
})
