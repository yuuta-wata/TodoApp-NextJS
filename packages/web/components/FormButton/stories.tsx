import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { FormButton, Props } from '.'

export default {
  component: FormButton,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    )
  ],
  argTypes: { onClick: {} }
}

const Template: Story<Props> = args => <FormButton {...args} />

export const RegsterButton = Template.bind({})
RegsterButton.args = {
  type: 'primary',
  title: '登録',
  isLoading: false
}

export const LoginButton = Template.bind({})
LoginButton.args = {
  type: 'primary',
  title: 'ログイン',
  isLoading: false
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  type: 'primary',
  title: 'ログイン',
  isLoading: true
}
