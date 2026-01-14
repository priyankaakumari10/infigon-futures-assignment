"use client"
import React, { useEffect, useState } from 'react'

const ProductFavBtn = ({ productId }: { productId: number }) => {
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem('fav_products') || '[]'
    )
    setIsFav(stored.includes(productId))
  }, [productId])

  const handleFavClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const stored: number[] = JSON.parse(
      localStorage.getItem('fav_products') || '[]'
    )

    let updatedFavs

    if (stored.includes(productId)) {
      updatedFavs = stored.filter(id => id !== productId)
      setIsFav(false)
    } else {
      updatedFavs = [...stored, productId]
      setIsFav(true)
    }

    localStorage.setItem(
      'fav_products',
      JSON.stringify(updatedFavs)
    )

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('fav_products_updated'))
    }
  }

  return (
    <button
      onClick={handleFavClick}
      aria-label="Add to favorites"
      className={`absolute top-0 right-0 rounded-full w-8 h-8 flex items-center justify-center shadow hover:scale-110 transition cursor-pointer z-10 ${isFav ? 'bg-white' : 'bg-sky-200'}`}
    >
      <span className="text-base">
        {isFav ? '❤️' : '🤍'}
      </span>
    </button>
  )
}

export default ProductFavBtn
