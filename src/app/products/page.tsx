import ProductList from '@/components/products/ProductList'
import { Product } from '@/type/product'
import { fetchJson } from '@/lib/fetchJson'

interface Props {
  searchParams: Promise<{
    category?: string
  }>
}
const Products = async ({ searchParams }: Props) => {
  const category = (await searchParams).category
  const path = category
    ? `/products/category/${category}`
    : `/products`

  let products: Product[] = []

  try {
    products = await fetchJson<Product[]>(path, {
      cache: 'no-store',
    })
  } catch (error) {
    console.error('Failed to fetch products:', error)
    products = []
  }

  return <ProductList products={products} />
}

export default Products
