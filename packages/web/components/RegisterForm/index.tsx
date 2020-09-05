import React, { ChangeEvent } from 'react'
import { Form } from 'antd'

import { InputArea } from '../InputArea'
import { FormButton } from '../FormButton'

export interface Props {
  nickNameValue: string
  emailValue: string
  passwordValue: string
  nickNameEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  emailEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  passwordEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
  onClick: () => any
  isLoading?: boolean
  initialState?: {
    name: string
    email: string
    password: string
  }
}

export const RegisterForm = ({
  nickNameValue,
  emailValue,
  passwordValue,
  nickNameEvent,
  emailEvent,
  passwordEvent,
  onClick,
  isLoading,
  initialState
}: Props) => (
  <Form
    initialValues={{
      name: initialState ? initialState.name : null,
      email: initialState ? initialState.email : null,
      password: initialState ? initialState.password : null
    }}
  >
    <Form.Item
      name='name'
      rules={[{ required: true, message: 'ニックネームを入力してください' }]}
    >
      <InputArea
        type='name'
        placeholder='ニックネーム'
        value={nickNameValue}
        onChangeEvent={nickNameEvent}
      />
    </Form.Item>
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
        htmlType='submit'
        title='登録'
        isLoading={isLoading}
        onClick={onClick}
      />
    </Form.Item>
  </Form>
)
