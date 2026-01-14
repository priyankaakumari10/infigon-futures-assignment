"use client"
import { useRouter, useSearchParams } from 'next/navigation'

const ProductFilters = () => {
    const route = useRouter()
    const seaarchParams = useSearchParams();
    const selectedCate = seaarchParams.get('category') || '';
    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value;
        const params = new URLSearchParams(seaarchParams.toString());
        if (category) {
            params.set('category', category);
        } else {
            params.delete('category');
        }
        route.push(`/products?${params.toString()}`);
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