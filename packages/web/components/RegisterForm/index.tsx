import React, { ChangeEvent } from 'react'
import { Input } from '../Input'
import { FormButton } from '../FormButton'

export interface Props {
  nickNameValue: string
  emailValue: string
  passwordValue: string
  nickNameEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  emailEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  passwordEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  buttonPress: () => any
  isLoading: boolean
}

export const RegisterForm = ({
  nickNameValue,
  emailValue,
  passwordValue,
  nickNameEvent,
  emailEvent,
  passwordEvent,
  buttonPress,
  isLoading
}: Props) => (
  <form>
    <Input
      type='name'
      placeholder='ニックネーム'
      value={nickNameValue}
      changeEvent={nickNameEvent}
    />
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
      title='登録'
      isLoading={isLoading}
      onPress={buttonPress}
    />
  </form>
)
