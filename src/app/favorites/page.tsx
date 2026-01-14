"use client"

import ProductCard from "@/components/products/ProductCard"
import { useEffect, useState } from "react"

interface Product {
  id: number
  title: string
  price: number
  category: string
  image: string
}

const FavoritesClient = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFavorites = async () => {
      const favIds: number[] = JSON.parse(
        localStorage.getItem("fav_products") || "[]"
      )

      if (favIds.length === 0) {
        setProducts([])
        setLoading(false)
        return
      }

      const responses = await Promise.all(
        favIds.map(id =>
          fetch(`https://fakestoreapi.com/products/${id}`).then(res =>
            res.json()
          )
        )
      )

      setProducts(responses)
      setLoading(false)
    }

    loadFavorites()
  }, [])

  if (loading) {
    return <p>Loading favorites...</p>
  }

  if (products.length === 0) {
    return <p className="text-gray-500">No favorite products yet ❤️</p>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Favorites</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}

export default FavoritesClient
