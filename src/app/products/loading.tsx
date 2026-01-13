import ProductCardSkeleton from '@/components/products/ProductCardSkeleton'

const Loading = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default Loading
