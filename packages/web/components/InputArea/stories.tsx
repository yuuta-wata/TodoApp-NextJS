import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { InputArea, Props } from '.'

export default {
  component: InputArea,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    )
  ],
  argTypes: { onChangeEvent: {} }
}

const Template: Story<Props> = args => <InputArea {...args} />
export const EmailInput = Template.bind({})
EmailInput.args = {
  type: 'email',
  placeholder: 'Eメール',
  value: 'yuuta@yuuta.com'
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  type: 'password',
  placeholder: 'パスワード',
  value: 'test1234'
}
