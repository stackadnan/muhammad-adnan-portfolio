import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>
    </div>
  )
}

export default LoadingSpinner
