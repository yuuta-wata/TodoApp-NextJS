import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { LoginForm, Props } from '.'

export default {
  component: LoginForm,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    )
  ],
  argTypes: { onClick: {} }
}

// 公式に記載されているやり方
// https://storybook.js.org/docs/react/writing-stories/args#story-args
const Template: Story<Props> = args => <LoginForm {...args} />

export const Login = Template.bind({})
Login.args = {
  emailValue: 'yuuta@yuuta.com',
  emailEvent: () => ({}),
  passwordValue: '1234',
  passwordEvent: () => ({}),
  isLoading: false
}
