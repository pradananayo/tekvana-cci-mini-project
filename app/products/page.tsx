import { Suspense } from "react"
import ProductGrid from "@/components/ProductGrid"
import LoadingSpinner from "@/components/LoadingSpinner"

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Semua Produk</h1>
        <Suspense fallback={<LoadingSpinner />}>
          <ProductGrid showAll={true} />
        </Suspense>
      </div>
    </div>
  )
}
