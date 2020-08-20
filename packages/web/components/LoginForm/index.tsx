import { ChangeEvent } from 'react'
import { Input } from '../Input'
import { FormButton } from '../FormButton'

export interface Props {
  emailValue: string
  passwordValue: string
  emailEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  passwordEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  buttonPress: () => any
  isLoading: boolean
}

export const LoginForm = ({
  emailValue,
  passwordValue,
  emailEvent,
  passwordEvent,
  buttonPress,
  isLoading
}: Props) => (
  <form>
    <Input
      type='email'
      placeholder='Eメール'
      value={emailValue}
      changeEvent={emailEvent}
    />
    <Input
      type='password'
      placeholder='パスワード'
      value={passwordValue}
      changeEvent={passwordEvent}
    />
    <FormButton
      type='button'
      title='ログイン'
      isLoading={isLoading}
      onPress={buttonPress}
    />
  </form>
)
