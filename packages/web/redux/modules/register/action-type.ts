export const INPUT_NICKNAME = 'INPUT_NICKNAME'

export const INPUT_EMAIL = 'INPUT_EMAIL'

export const INPUT_PASSWORD = 'INPUT_PASSWORD'

interface InputNickName {
  type: typeof INPUT_NICKNAME
  payload: {
    nickName: string
  }
}

interface InputEmail {
  type: typeof INPUT_EMAIL
  payload: {
    email: string
  }
}

interface InputPassword {
  type: typeof INPUT_PASSWORD
  payload: {
    password: string
  }
}

export type RegisterActionTypes = InputNickName | InputEmail | InputPassword
