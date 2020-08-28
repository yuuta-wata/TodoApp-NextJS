import React, { ChangeEvent } from 'react'

export interface Props {
  type: string
  placeholder: string
  value: string
  onChangeEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
}

export const Input = ({ type, placeholder, value, onChangeEvent }: Props) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChangeEvent}
  />
)
