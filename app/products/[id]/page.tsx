import { notFound } from "next/navigation"
import ProductDetail from "@/components/ProductDetail"
import { getProduct } from "@/lib/api"

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}) {
  const product = await getProduct(params.id)

  if (!product) {
    return {
      title: "Produk tidak ditemukan",
    }
  }

  return {
    title: product.title,
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
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
