const ProductCardSkeleton = () => {
  return (
    <div className="bg-background rounded-xl shadow p-4 flex flex-col animate-pulse">
      <div className="relative w-full h-48 mb-4 bg-gray-700 rounded-lg" />
      
      <div className="h-4 bg-gray-700 rounded mb-2" />
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
      
      <div className="h-3 bg-gray-700 rounded w-1/4 mb-4" />
      
      <div className="h-6 bg-gray-700 rounded w-1/3 mt-auto" />
    </div>
  )
}

export default ProductCardSkeleton
