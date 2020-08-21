import React from 'react'

export interface Props {
  type: 'button' | 'submit' | 'reset'
  title: string
  isLoading: boolean
  onPress: () => any
}

export const FormButton = ({ type, title, isLoading, onPress }: Props) => (
  <button type={type} disabled={isLoading} onClick={onPress}>
    {title}
  </button>
)
