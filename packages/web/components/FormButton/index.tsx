import React from 'react'

export interface Props {
  type: 'button' | 'submit' | 'reset'
  title: string
  isLoading: boolean
  onClick: () => any
}

export const FormButton = ({ type, title, isLoading, onClick }: Props) => (
  <button type={type} disabled={isLoading} onClick={onClick}>
    {title}
  </button>
)
