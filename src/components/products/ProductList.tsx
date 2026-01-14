"use client"
import React, { useState, useMemo, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductSearch from './ProductSearch'
import ProductFilters from './ProductFilters'
import ProductFavFilters from './ProductFavFilters'
import { Product } from '@/type/product'

interface ProductListProps {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showOnlyFav, setShowOnlyFav] = useState(false)
  const [favIds, setFavIds] = useState<number[]>([])

  useEffect(() => {
    const loadFavs = () => {
      try {
        const stored: number[] = JSON.parse(
          localStorage.getItem('fav_products') || '[]'
        )
        setFavIds(stored)
      } catch {
        setFavIds([])
      }
    }

    loadFavs()

    const handleFavUpdate = () => loadFavs()

    if (typeof window !== 'undefined') {
      window.addEventListener('fav_products_updated', handleFavUpdate)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('fav_products_updated', handleFavUpdate)
      }
    }
  }, [])

  const filteredProducts = useMemo(() => {
    let result = products

    if (searchQuery.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (showOnlyFav) {
      result = result.filter((product) => favIds.includes(product.id))
    }

    return result
  }, [products, searchQuery, showOnlyFav, favIds])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      <div className='lg:flex gap-2'>
        <ProductSearch onSearchChange={setSearchQuery} />
        <div className='flex'>
        <ProductFilters/>
        <ProductFavFilters
          showOnlyFav={showOnlyFav}
          onToggle={() => setShowOnlyFav((prev) => !prev)}
        />
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            No products found matching &quot;{searchQuery}&quot;
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList

