import React from 'react'

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to MyApp</h2>
          <p className="text-gray-600 text-lg">
            Your all-in-one platform for awesome stuff. Start exploring now.
          </p>
        </div>
      </main>
    </div>
  )
}
