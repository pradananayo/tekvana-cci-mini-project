"use client"

import { useState, useEffect } from "react"
import { Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

// Format price to Indonesian Rupiah
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price)
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }

    const updatedCart = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">Keranjang Belanja</h1>
          <p className="text-xl text-gray-600 mb-8">Keranjang Anda kosong</p>
          <Link href="/products">
            <Button>Lanjutkan Belanja</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Keranjang Belanja</h1>

        <div className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={100}
                height={100}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{formatPrice(item.price)}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button variant="destructive" size="sm" onClick={() => removeItem(item.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold">Total: {formatPrice(getTotalPrice())}</div>
            <div className="flex gap-4">
              <Link href="/products">
                <Button variant="outline">Lanjutkan Belanja</Button>
              </Link>
              <Link href="/checkout">
                <Button>Lanjut ke Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
