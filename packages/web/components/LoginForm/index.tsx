import React from 'react'
import { Form, Input, Button } from 'antd'

import { FormButton } from '../FormButton'
import { Props } from './type'

export const LoginForm = ({
  changeEmail,
  changePassword,
  onFinish,
  onPush,
  isLoading,
  testObservable
}: Props) => (
  <Form
    onFinish={onFinish}
    onValuesChange={(_cahgedValue, values) => {
      changeEmail(values.email)
      changePassword(values.password)
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
    <p>{testObservable ? testObservable : 'noPush'}</p>
    <Button onClick={onPush}>PUSU</Button>
  </Form>
)
