import React from 'react'

import { Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

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
  argTypes: { onPress: { action: 'clicked' } }
}

// 公式に記載されているやり方
// https://storybook.js.org/docs/react/writing-stories/args#story-args
const Template: Story<Props> = args => <FormButton {...args} />

export const RegsterButton = Template.bind({})
RegsterButton.args = {
  type: 'button',
  title: '登録',
  isLoading: false
}

export const LoginButton = Template.bind({})
LoginButton.args = {
  type: 'button',
  title: 'ログイン',
  isLoading: false,
  onPress: action('onPress')
}
