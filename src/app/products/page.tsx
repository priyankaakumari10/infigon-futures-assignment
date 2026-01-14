import ProductCard from '@/components/products/ProductCard'
import ProductSearch from '@/components/products/ProductSearch'
import Image from 'next/image'

interface Product {
  id: number
  title: string
  price: number
  category: string
  image: string
}

const Products = async () => {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  const products: Product[] = await res.json()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      <ProductSearch/>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
        <ProductCard product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
