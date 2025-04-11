import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const AuthLayout = ({children}:Props) => {
  return (
    <div>{children}</div>
  )
}
