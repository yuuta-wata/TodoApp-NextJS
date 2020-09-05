import React from 'react'
import { Button } from 'antd'

export interface Props {
  type: 'text' | 'link' | 'ghost' | 'primary' | 'default' | 'dashed'
  title: string
  isLoading: boolean
  onClick: () => any
}

export const FormButton = ({ type, title, isLoading, onClick }: Props) => (
  <Button
    type={type}
    disabled={isLoading}
    onClick={onClick}
    loading={isLoading}
  >
    {title}
  </Button>
)
