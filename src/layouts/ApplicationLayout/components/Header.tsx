'use client'

import { useAuth } from "@/modules/auth/useAuth/useAuth"

export const Header = () => {
  const {user,isAuthenticated} = useAuth()
  
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-gray-800">MyApp</h1>
    {isAuthenticated && <p>{user.name}</p>}
    <button className="bg-blue-500 text-white hover:bg-blue-600">Login</button>
  </header>
  )
}
