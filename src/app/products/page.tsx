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

  const products = await fetchJson<Product[]>((path), {
    cache: 'no-store',
  })

  return <ProductList products={products} />
}

export default Products
