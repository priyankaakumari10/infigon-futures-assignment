import Link from 'next/dist/client/link'
import Image from 'next/image'
import ProductFavBtn from './ProductFavBtn'
import { Product } from '@/type/product'

const ProductCard = ({ product }: { product: Product }) => {
  return (
          <Link href={`/products/${product.id}`} key={product.id}
>

      <div
               className="bg-background rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
             >
               <div className="relative w-full h-48 mb-4">
                              <ProductFavBtn productId={product.id} />

                 <Image
                   src={product.image}
                   alt={product.title}
                   fill
                   className="object-contain"
                 />
               </div>
   
               <h2 className="text-sm font-medium line-clamp-2 mb-2 text-white">
                 {product.title}
               </h2>
   
               <p className="text-xs text-gray-500 mb-2 capitalize">
                 {product.category}
               </p>
   
               <p className="text-lg font-semibold mt-auto text-white">
                 ₹{product.price}
               </p>
             </div>
           </Link>
  )
}

export default ProductCard