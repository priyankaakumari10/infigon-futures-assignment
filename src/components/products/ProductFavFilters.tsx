"use client"
import React from 'react'

interface ProductFavFiltersProps {
  showOnlyFav: boolean
  onToggle: () => void
}

const ProductFavFilters = ({ showOnlyFav, onToggle }: ProductFavFiltersProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`p-2 border border-gray-300 rounded mb-4 ml-2  flex items-center justify-center ${
        showOnlyFav ? 'bg-red-100' : 'bg-white'
      }`}
      aria-pressed={showOnlyFav}
      aria-label="Show only favorite products"
    >
      <span className="text-base mr-1">{showOnlyFav ? '❤️' : '🤍'}</span>
      <span className="text-xs">Fav only</span>
    </button>
  )
}

export default ProductFavFilters