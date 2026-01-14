"use client"
import { useRouter, useSearchParams } from 'next/navigation'

const ProductFilters = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const selectedCate = searchParams?.get('category') || '';
    
    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value;
        const params = new URLSearchParams(searchParams?.toString() || '');
        if (category) {
            params.set('category', category);
        } else {
            params.delete('category');
        }
        const newUrl = `/products?${params.toString()}`;
        router.push(newUrl);
    }
  return (
   <select
   value={selectedCate} 
   onChange={handleFilter}
        className="p-2 border border-gray-300 rounded mb-4">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
    </select>
  )
}

export default ProductFilters