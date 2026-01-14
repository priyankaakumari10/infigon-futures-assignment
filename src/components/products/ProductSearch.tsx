"use client"
import { useDebounce } from '@/hooks/useDebounce'
import React, { useEffect, useState } from 'react'

interface ProductSearchProps {
  onSearchChange: (query: string) => void
}

const ProductSearch = ({ onSearchChange }: ProductSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, 300)

  useEffect(()=>{
onSearchChange(debouncedQuery)
  },[debouncedQuery, onSearchChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
  }

  return (
    <div className="flex-1">
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>
      <input
        id="product-search"
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
    </div>
  )
}

export default ProductSearch