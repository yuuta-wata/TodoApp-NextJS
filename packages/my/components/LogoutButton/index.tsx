import React from 'react'
import { Button } from 'antd'

interface Props {
  onPress: () => any
}

export const LogoutButton = ({ onPress }: Props) => (
  <Button type='default' onClick={onPress}>
    ログアウト
  </Button>
)
