import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Product {
  id: number
  title: string
  price: number
  category: string
  image: string
  description: string
}

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params
  const productId = Number(id)
  
  if (Number.isNaN(productId)) { 
    notFound()
  }

  const res = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    notFound()
  }

  const text = await res.text()

  if (!text) {
    notFound()
  }

  const product: Product = JSON.parse(text)

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-[500px] bg-background rounded-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold  mb-4">
            {product.title}
          </h1>

          <p className="text-gray-700 mb-4">
            Category: <span className="">{product.category}</span>
          </p>

          <p className="text-3xl font-bold  mb-6">
            ₹{product.price}
          </p>

          <p className="">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
