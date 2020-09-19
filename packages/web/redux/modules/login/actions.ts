import {
  LoginActionType,
  INPUT_USER_EMAIL,
  INPUT_USER_PASSWORD,
  TEST_OBSERVABLE,
  TEST_PUSH
} from './action-type'

export const ChangeUserEmail = (email: string): LoginActionType => ({
  type: INPUT_USER_EMAIL,
  payload: {
    email
  }
})

export const ChangeUserPassword = (password: string): LoginActionType => ({
  type: INPUT_USER_PASSWORD,
  payload: {
    password
  }
})

export const TestAction = (): LoginActionType => ({
  type: TEST_OBSERVABLE
})

export const TestPushAction = (): LoginActionType => ({
  type: TEST_PUSH
})
