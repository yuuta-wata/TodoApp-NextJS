import React from 'react'
import { Button } from 'antd'

export interface Props {
  type: 'text' | 'link' | 'ghost' | 'primary' | 'default' | 'dashed'
  title: string
  isLoading?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  onClick: () => any
}

export const FormButton = ({
  type,
  title,
  isLoading,
  htmlType,
  onClick
}: Props) => (
  <Button
    type={type}
    htmlType={htmlType}
    disabled={isLoading}
    onClick={onClick}
    loading={isLoading}
  >
    {title}
  </Button>
)
