import React, { ChangeEvent } from 'react'
import { Input } from '../Input'
import { FormButton } from '../FormButton'

export interface Props {
  emailValue: string
  passwordValue: string
  emailEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  passwordEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  onClick: () => any
  isLoading: boolean
}

export const LoginForm = ({
  emailValue,
  passwordValue,
  emailEvent,
  passwordEvent,
  onClick,
  isLoading
}: Props) => (
  <form>
    <Input
      type='email'
      placeholder='Eメール'
      value={emailValue}
      onChangeEvent={emailEvent}
    />
    <Input
      type='password'
      placeholder='パスワード'
      value={passwordValue}
      onChangeEvent={passwordEvent}
    />
    <FormButton
      type='primary'
      title='ログイン'
      isLoading={isLoading}
      onClick={onClick}
    />
  </form>
)
