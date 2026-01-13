'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-2xl font-semibold mb-2 text-red-500">
        Something went wrong
      </h2>

      <p className="text-gray-500 mb-6">
        Failed to load products. Please try again.
      </p>

      <button
        onClick={reset}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Retry
      </button>
    </div>
  )
}
