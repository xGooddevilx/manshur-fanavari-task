import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const AuthLayout = ({children}:Props) => {
  return (
    <div className='flex justify-center items-center h-dvh'>{children}</div>
  )
}
