"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Plus, Minus } from "lucide-react"
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
  features?: string[]
}

interface ProductDetailProps {
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

// Generate Lorem Ipsum description
const generateLoremDescription = (): string => {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
    }

    const existingCart = localStorage.getItem("cart")
    const cart = existingCart ? JSON.parse(existingCart) : []

    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id)

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity
    } else {
      cart.push(cartItem)
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    // Dispatch custom event to update cart count
    window.dispatchEvent(new Event("cartUpdated"))

    alert("Produk berhasil ditambahkan ke keranjang!")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="aspect-square overflow-hidden rounded-lg mb-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating.rate) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600 ml-2">
            {product.rating.rate} ({product.rating.count} ulasan)
          </span>
        </div>

        <div className="text-3xl font-bold text-blue-600 mb-6">{formatPrice(product.price)}</div>

        <p className="text-gray-700 mb-6 leading-relaxed">{generateLoremDescription()}</p>

        {product.features && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Fitur Utama:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="flex items-center gap-4 mb-6">
          <span className="font-semibold">Jumlah:</span>
          <div className="flex items-center border rounded-lg">
            <Button variant="ghost" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <Minus className="w-4 h-4" />
            </Button>
            <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
            <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Button size="lg" className="w-full" onClick={addToCart}>
          Tambah ke Keranjang
        </Button>
      </div>
    </div>
  )
}
