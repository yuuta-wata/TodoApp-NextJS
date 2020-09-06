import React, { ChangeEvent } from 'react'
import { Input } from 'antd'

export interface Props {
  type: string
  placeholder: string
  value?: string
  onChangeEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
}

export const InputArea = ({
  type,
  placeholder,
  value,
  onChangeEvent
}: Props) => (
  <Input
    type={type}
    placeholder={placeholder}
    value={value ? value : undefined}
    onChange={onChangeEvent}
  />
)
