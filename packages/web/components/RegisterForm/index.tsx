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
  onClick: () => any
  isLoading: boolean
}

export const RegisterForm = ({
  nickNameValue,
  emailValue,
  passwordValue,
  nickNameEvent,
  emailEvent,
  passwordEvent,
  onClick,
  isLoading
}: Props) => (
  <form>
    <Input
      type='name'
      placeholder='ニックネーム'
      value={nickNameValue}
      onChangeEvent={nickNameEvent}
    />
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
      title='登録'
      isLoading={isLoading}
      onClick={onClick}
    />
  </form>
)
