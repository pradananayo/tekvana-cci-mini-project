import { getProducts } from "@/lib/api"
import ProductCard from "./ProductCard"

interface ProductGridProps {
  showAll?: boolean
}

export default async function ProductGrid({ showAll = false }: ProductGridProps) {
  const products = await getProducts()
  const displayProducts = showAll ? products : products.slice(0, 6)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
