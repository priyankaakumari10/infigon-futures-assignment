"use client"
import React, { useState } from 'react'

interface ProductSearchProps {
  onSearchChange: (query: string) => void
}

const ProductSearch = ({ onSearchChange }: ProductSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearchChange(query)
  }

  return (
    <div className="flex-1">
        <input
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