import React from 'react'

const ProductDetailSkeleton = () => {
  return (
    <div className="p-6 max-w-7xl  mx-auto animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-300 rounded-xl w-full h-[500px]"></div>
        <div>
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 bg-gray-300 rounded mb-6"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton