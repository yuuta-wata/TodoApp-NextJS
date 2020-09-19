export const INPUT_USER_EMAIL = 'INPUT_USER_EMAIL'

export const INPUT_USER_PASSWORD = 'INPUT_USER_PASSWORD'

export const TEST_OBSERVABLE = 'TEST_OBSERVABLE'

export const TEST_PUSH = 'TEST_PUSH'

interface InputUserEmail {
  type: typeof INPUT_USER_EMAIL
  payload: {
    email: string
  }
}

interface InputUserPassword {
  type: typeof INPUT_USER_PASSWORD
  payload: {
    password: string
  }
}

interface TestObservable {
  type: typeof TEST_OBSERVABLE
}

interface TestPush {
  type: typeof TEST_PUSH
  payload?: {
    test: string
  }
}

export type LoginActionType =
  | InputUserEmail
  | InputUserPassword
  | TestObservable
  | TestPush
