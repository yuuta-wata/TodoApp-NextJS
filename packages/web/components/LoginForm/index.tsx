import React, { ChangeEvent } from 'react'
import { Form } from 'antd'

import { InputArea } from '../InputArea'
import { FormButton } from '../FormButton'

export interface Props {
  emailValue: string
  passwordValue: string
  emailEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  passwordEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  onClick: () => any
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
  onClick,
  isLoading,
  initialState
}: Props) => (
  <Form
    initialValues={{
      email: initialState ? initialState.email : null,
      password: initialState ? initialState.password : null
    }}
  >
    <Form.Item
      name='email'
      rules={[{ required: true, message: 'Eメールを入力してください' }]}
    >
      <InputArea
        type='email'
        placeholder='Eメール'
        value={emailValue}
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
        value={passwordValue}
        onChangeEvent={passwordEvent}
      />
    </Form.Item>
    <Form.Item>
      <FormButton
        type='primary'
        title='ログイン'
        isLoading={isLoading}
        htmlType='submit'
        onClick={onClick}
      />
    </Form.Item>
  </Form>
)
