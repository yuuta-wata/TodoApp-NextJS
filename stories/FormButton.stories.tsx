import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import { FormButton } from '../packages/web/components/FormButton'
import { Props } from '../packages/web/components/FormButton'

export default {
  title: 'Components/Button',
  component: FormButton,
  decorators: [
    Story => (
      <div style={{ margin: '3em', backgroundColor: 'pink' }}>
        <Story />
      </div>
    )
  ]
} as Meta

// 公式に記載されているやり方
// https://storybook.js.org/docs/react/writing-stories/args#story-args
const Template: Story<Props> = args => <FormButton {...args} />

export const RegsterButton = Template.bind({})
RegsterButton.args = {
  type: 'button',
  title: '登録',
  isLoading: false,
  onPress: () => {}
}

export const LoginButton = Template.bind([])
LoginButton.args = {
  type: 'button',
  title: 'ログイン',
  isLoading: false,
  onPress: () => {}
}
