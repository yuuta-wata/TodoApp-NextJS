import React from 'react'
import { Form, Input } from 'antd'

import { FormButton } from '../FormButton'

export interface Props {
  nickNameEvent: (value: string) => any
  emailEvent: (value: string) => any
  passwordEvent: (value: string) => any
  onFinish: () => any
  isLoading?: boolean
}

export const RegisterForm = ({
  nickNameEvent,
  emailEvent,
  passwordEvent,
  onFinish,
  isLoading
}: Props) => (
  <Form
    onFinish={onFinish}
    onValuesChange={(_eventValue, values) => {
      nickNameEvent(values.name)
      emailEvent(values.email)
      passwordEvent(values.password)
    }}
    autoComplete='off'
  >
    <Form.Item
      name='name'
      rules={[{ required: true, message: 'ニックネームを入力してください' }]}
    >
      <Input placeholder='ニックネーム' />
    </Form.Item>
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
        htmlType='submit'
        title='登録'
        isLoading={isLoading}
      />
    </Form.Item>
  </Form>
)
