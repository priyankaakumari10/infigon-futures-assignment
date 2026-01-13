import ProductCard from '@/components/products/ProductCard'
import { Product } from '@/type/product'

const ProductsList = async () => {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  const products: Product[] = await res.json()

  if (products.length === 0) {
    return (
      <div className="col-span-full text-center py-12 text-gray-400">
        <p>No products available</p>
      </div>
    )
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  )
}

export default ProductsList
