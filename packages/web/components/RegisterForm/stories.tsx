import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { RegisterForm, Props } from '.'

export default {
  component: RegisterForm,
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
const Template: Story<Props> = args => <RegisterForm {...args} />

export const Default = Template.bind({})
Default.args = {
  nickNameValue: '',
  nickNameEvent: () => {},
  emailValue: '',
  emailEvent: () => {},
  passwordValue: '',
  passwordEvent: () => {},
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
    name: 'ゆーた',
    email: 'yuuta@yuuta.com',
    password: '1234'
  }
}
