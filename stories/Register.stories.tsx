import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import { RegisterForm, Props } from '../packages/web/components/RegisterForm'

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as Meta

// 公式に記載されているやり方
// https://storybook.js.org/docs/react/writing-stories/args#story-args
const Template: Story<Props> = args => <RegisterForm {...args} />

export const Register = Template.bind({})
Register.args = {
  nickNameValue: 'ゆーた',
  nickNameEvent: action('onChangeNickName!!!'),
  emailValue: 'yuuta@yuuta.com',
  emailEvent: action('onChangeEmail!!!'),
  passwordValue: '1234',
  passwordEvent: action('onChangePassword!!!'),
  buttonPress: action('onPressLoginButton!!!'),
  isLoading: false
}