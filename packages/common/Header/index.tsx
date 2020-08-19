import React from 'react'

export const Header: React.FC = ({ children }) => {
  return (
    <header>
      <h2>TODO APP</h2>
      {children && children}
    </header>
  )
}
