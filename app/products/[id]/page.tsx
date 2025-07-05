import { notFound } from "next/navigation"
import ProductDetail from "@/components/ProductDetail"
import { getProduct } from "@/lib/api"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <ProductDetail product={product} />
      </div>
    </div>
  )
}
