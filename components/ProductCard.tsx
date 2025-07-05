import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductCardProps {
  product: Product
}

// Format price to Indonesian Rupiah
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price)
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group h-full flex flex-col bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
      <CardContent className="p-0 flex-1">
        <div className="relative overflow-hidden">
          <Link href={`/products/${product.id}`}>
            <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700 p-4"
              />
            </div>
          </Link>

          {/* Overlay Actions */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              size="sm"
              variant="secondary"
              className="w-10 h-10 rounded-full p-0 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Link href={`/products/${product.id}`}>
              <Button
                size="sm"
                variant="secondary"
                className="w-10 h-10 rounded-full p-0 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
              >
                <Eye className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Price Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              {formatPrice(product.price)}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-bold text-lg leading-tight hover:text-blue-600 transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
              {product.title}
            </h3>
          </Link>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating.rate) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">({product.rating.count})</span>
            </div>
          </div>

          <Link href={`/products/${product.id}`} className="block">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Lihat Detail
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
