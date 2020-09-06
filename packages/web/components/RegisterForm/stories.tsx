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
  argTypes: { onFinish: {} }
}

// 公式に記載されているやり方
// https://storybook.js.org/docs/react/writing-stories/args#story-args
const Template: Story<Props> = args => <RegisterForm {...args} />

export const Default = Template.bind({})
Default.args = {
  nickNameEvent: () => {},
  emailEvent: () => {},
  passwordEvent: () => {},
  isLoading: false
}
