import React, { ChangeEvent } from 'react'
import { InputArea } from '../InputArea'
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
    <InputArea
      type='email'
      placeholder='Eメール'
      value={emailValue}
      onChangeEvent={emailEvent}
    />
    <InputArea
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
