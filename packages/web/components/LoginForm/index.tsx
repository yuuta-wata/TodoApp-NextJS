import React from 'react'
import { Form, Input } from 'antd'

import { FormButton } from '../FormButton'

export interface Props {
  emailEvent: (value: string) => any
  passwordEvent: (value: string) => any
  onFinish: () => any
  isLoading?: boolean
}

export const LoginForm = ({
  emailEvent,
  passwordEvent,
  onFinish,
  isLoading
}: Props) => (
  <Form
    onFinish={onFinish}
    onValuesChange={(_cahgedValue, values) => {
      emailEvent(values.email)
      passwordEvent(values.password)
    }}
    autoComplete='off'
  >
    <Form.Item
      name='email'
      rules={[{ required: true, message: 'Eメールを入力してください' }]}
    >
      <Input placeholder='Eメール' />
    </Form.Item>
    <Form.Item
      name='password'
      rules={[{ required: true, message: 'パスワードを入力してください' }]}
    >
      <Input.Password placeholder='パスワード' />
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
