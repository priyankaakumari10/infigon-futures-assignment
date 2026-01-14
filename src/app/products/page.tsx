import ProductList from '@/components/products/ProductList'
import { Product } from '@/type/product'

interface Props {
  searchParams: Promise<{
    category?: string
  }>
}
const Products = async ({ searchParams }: Props) => {
    const category = (await searchParams).category
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

  return <ProductList products={products} />
}

export default Products
