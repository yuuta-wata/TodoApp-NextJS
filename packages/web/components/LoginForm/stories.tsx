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

const Template: Story<Props> = args => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {
  emailValue: '',
  emailEvent: () => ({}),
  passwordValue: '',
  passwordEvent: () => ({}),
  isLoading: false
}

export const Inputed = Template.bind({})
Inputed.args = {
  emailValue: '',
  emailEvent: () => ({}),
  passwordValue: '',
  passwordEvent: () => ({}),
  isLoading: false,
  initialState: {
    email: 'yuuta@yuuta.com',
    password: '1234'
  }
}
