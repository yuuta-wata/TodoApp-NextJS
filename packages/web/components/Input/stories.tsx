import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Input, Props } from '.'

export default {
  component: Input,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    )
  ],
  argTypes: { onChangeEvent: {} }
}

// 公式に記載されているやり方
// https://storybook.js.org/docs/react/writing-stories/args#story-args
const Template: Story<Props> = args => <Input {...args} />

export const EmailInput = Template.bind({})
EmailInput.args = {
  type: 'email',
  placeholder: 'Eメール',
  value: 'yuuta@yuuta.com'
}
