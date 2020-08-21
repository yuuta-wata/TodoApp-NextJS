import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import { Input } from '../packages/web/components/Input'
import { Props } from '../packages/web/components/Input'

export default {
  title: 'Components/Input',
  component: Input,
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
const Template: Story<Props> = args => <Input {...args} />

export const EmailInput = Template.bind({})
EmailInput.args = {
  type: 'email',
  placeholder: 'Eメール',
  value: 'yuuta@yuuta.com',
  changeEvent: action('onChange!!!')
}
