'use client'

import { useAuth } from "@/modules/auth/useAuth/useAuth"

export const UserDashboardPage = () => {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">👤 User Dashboard</h1>
        
        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{user.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Username:</span>
            <span>{user.username}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Role:</span>
            <span className="capitalize">{user.role}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
