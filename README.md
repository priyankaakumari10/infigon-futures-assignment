# Infigon Futures Assignment - Product Catalog

A modern product catalog application built with Next.js 16, React 19, and TypeScript. This application displays products from the FakeStore API with search, filtering, and favorites functionality.

## Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd infigon-futures-assignment
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The application will automatically redirect to `/products` page.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Features Implemented

### Core Features

1. **Product Listing Page** (`/products`)
   - Displays products in a responsive grid layout (1-4 columns based on screen size)
   - Server-side rendering with Next.js App Router
   - Loading states with skeleton components
   - Empty state handling when no products match filters

2. **Product Detail Page** (`/products/[id]`)
   - Full product information display
   - Large product image with optimized Next.js Image component
   - Product description, category, and price
   - 404 error handling for invalid product IDs

3. **Search Functionality**
   - Real-time product search by title
   - Debounced input (300ms delay) to optimize performance
   - Client-side filtering for instant results
   - Case-insensitive search

4. **Category Filtering**
   - Dropdown filter for product categories
   - URL-based filtering using query parameters
   - Categories: Electronics, Jewelery, Men's Clothing, Women's Clothing
   - "All Categories" option to clear filter

5. **Favorites System**
   - Add/remove products from favorites with heart button
   - Favorites stored in browser localStorage
   - Cross-component synchronization using custom events
   - "Favorites Only" filter toggle to show only favorited products
   - Visual indicators (filled/empty heart) for favorite status

6. **Responsive Design**
   - Mobile-first approach
   - Responsive grid layout adapting to screen sizes
   - Touch-friendly interface elements
   - Optimized for various device sizes

7. **Performance Optimizations**
   - Next.js Image optimization
   - Debounced search input
   - Memoized filtered product lists
   - Server-side rendering for initial page load

## Assumptions / Trade-offs

### Technical Assumptions

1. **External API Dependency**
   - Uses FakeStore API (`https://fakestoreapi.com`) as the data source
   - No local database or backend server required
   - Assumes API is available and returns expected data structure

2. **Client-Side State Management**
   - Favorites are stored in `localStorage` (browser-only, not persisted across devices)
   - No user authentication system - favorites are device-specific
   - Custom event system (`fav_products_updated`) for cross-component communication

3. **Search Implementation**
   - Client-side filtering instead of server-side search
   - Assumes all products fit in memory for filtering
   - Search only matches product titles, not descriptions or other fields

4. **Category Filtering**
   - Hardcoded category list in the filter dropdown
   - Categories are fetched from URL query params but not dynamically loaded
   - Assumes categories match API response format exactly

5. **Caching Strategy**
   - All API calls use `cache: 'no-store'` to ensure fresh data
   - No caching layer implemented - every page load fetches from API
   - Trade-off: Better data freshness vs. potential performance impact

6. **Error Handling**
   - Basic error handling with 404 pages for invalid products
   - No retry logic for failed API requests
   - Assumes API failures are rare and can be handled by Next.js error boundaries

7. **Image Handling**
   - Images are loaded from external domain (`fakestoreapi.com`)
   - Next.js Image component configured for this domain
   - No fallback images or error states for broken image URLs

8. **TypeScript Types**
   - Product type definition based on FakeStore API structure
   - Assumes API response matches the defined `Product` interface
   - No runtime type validation

### Design Trade-offs

1. **No Pagination**
   - All products loaded at once
   - Assumes product count is manageable for client-side rendering
   - Could impact performance with large product catalogs

2. **No Loading States for Filters**
   - Category filter changes trigger full page navigation
   - No intermediate loading indicators during filter changes
   - Trade-off: Simpler UX vs. perceived performance

3. **Limited Accessibility**
   - Basic ARIA labels implemented
   - Keyboard navigation may not be fully optimized
   - Screen reader support is basic

4. **No State Persistence**
   - Search query and filter state not persisted in URL (except category)
   - Page refresh loses search and favorite filter state
   - Only category filter persists via URL query params

## Project Structure

```
src/
├── app/
│   ├── products/
│   │   ├── [id]/          # Product detail page
│   │   └── page.tsx       # Product listing page
│   └── layout.tsx         # Root layout
├── components/
│   └── products/
│       ├── ProductCard.tsx
│       ├── ProductList.tsx
│       ├── ProductSearch.tsx
│       ├── ProductFilters.tsx
│       ├── ProductFavBtn.tsx
│       └── ProductFavFilters.tsx
├── config/
│   └── api.ts             # API configuration
├── hooks/
│   └── useDebounce.ts     # Debounce hook
├── lib/
│   └── fetchJson.ts       # API fetch utility
└── type/
    └── product.ts         # TypeScript types
```

## Technologies Used

- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **FakeStore API** - Product data source

## Future Improvements

- Implement server-side search and pagination
- Add user authentication and cloud-based favorites storage
- Implement product reviews and ratings
- Add shopping cart functionality
- Improve accessibility (ARIA labels, keyboard navigation)
- Add unit and integration tests
- Implement error boundaries and retry logic
- Add loading states for all async operations
- Implement image lazy loading and error fallbacks
