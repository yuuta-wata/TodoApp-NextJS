import React, { ChangeEvent, FormEvent } from 'react'
import { Form } from 'antd'

import { InputArea } from '../InputArea'
import { FormButton } from '../FormButton'

export interface Props {
  emailValue: string
  passwordValue: string
  emailEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  passwordEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  onSubmit: (event: FormEvent<HTMLFormElement>) => any
  isLoading?: boolean
  initialState?: {
    email: string
    password: string
  }
}

export const LoginForm = ({
  emailValue,
  passwordValue,
  emailEvent,
  passwordEvent,
  onSubmit,
  isLoading,
  initialState
}: Props) => (
  <Form
    initialValues={{
      email: initialState ? initialState.email : emailValue,
      password: initialState ? initialState.password : passwordValue
    }}
    onSubmitCapture={onSubmit}
  >
    <Form.Item
      name='email'
      rules={[{ required: true, message: 'Eメールを入力してください' }]}
    >
      <InputArea
        type='email'
        placeholder='Eメール'
        onChangeEvent={emailEvent}
      />
    </Form.Item>
    <Form.Item
      name='password'
      rules={[{ required: true, message: 'パスワードを入力してください' }]}
    >
      <InputArea
        type='password'
        placeholder='パスワード'
        onChangeEvent={passwordEvent}
      />
    </Form.Item>
    <Form.Item>
      <FormButton
        type='primary'
        title='ログイン'
        isLoading={isLoading}
        htmlType='submit'
      />
    </Form.Item>
  </Form>
)
