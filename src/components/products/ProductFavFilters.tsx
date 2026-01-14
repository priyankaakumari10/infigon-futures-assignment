import Link from 'next/link'

const ProductFavFilters = () => {
  return (
    <div className="ml-2 mt-2">
        <Link href="/favorites" className="p-2 border border-gray-300 rounded mb-4">❤️</Link>
    </div>
  )
}

export default ProductFavFilters