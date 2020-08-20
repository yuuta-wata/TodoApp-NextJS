import { ChangeEvent } from 'react'

export interface Props {
  type: string
  placeholder: string
  value: string
  changeEvent: (evetn: ChangeEvent<HTMLInputElement>) => any
}

export const Input = ({ type, placeholder, value, changeEvent }: Props) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={changeEvent}
  />
)
