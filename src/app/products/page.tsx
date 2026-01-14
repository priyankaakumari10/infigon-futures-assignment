import ProductCard from '@/components/products/ProductCard'
import ProductFavFilters from '@/components/products/ProductFavFilters'
import ProductFilters from '@/components/products/ProductFilters'
import ProductSearch from '@/components/products/ProductSearch'
import { Product } from '@/type/product'

interface Props {
  searchParams: Promise<{
    category?: string
  }>
}
const Products = async ({ searchParams }: Props) => {
    const category = (await searchParams).category
    // console.log('category:', category)
     const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : `https://fakestoreapi.com/products`
    const res = await fetch(url, {
        cache: 'no-store',
    })

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  const products: Product[] = await res.json()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      <div className='flex gap-2'>
        <ProductSearch/>
      <ProductFilters/>
      <ProductFavFilters/>
    </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
        <ProductCard product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
