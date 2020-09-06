import React, { CSSProperties, ReactNode } from 'react'

export interface Props {
  style: CSSProperties
  children?: ReactNode
}

export const Header = (props: Props) => {
  const { style, children } = props
  return (
    <>
      <h1 style={style}>TODO APP</h1>
      {children}
    </>
  )
}
