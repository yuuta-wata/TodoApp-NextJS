import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { LoginForm } from '.'
import { Props } from './type'

export default {
  component: LoginForm,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    )
  ],
  argTypes: { onFinsh: {} }
}

const Template: Story<Props> = args => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {
  emailEvent: () => ({}),
  passwordEvent: () => ({}),
  isLoading: false
}
