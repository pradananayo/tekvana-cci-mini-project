"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = localStorage.getItem("cart")
      if (cart) {
        const cartItems = JSON.parse(cart)
        const count = cartItems.reduce((total: number, item: any) => total + item.quantity, 0)
        setCartCount(count)
      }
    }

    updateCartCount()
    window.addEventListener("storage", updateCartCount)
    window.addEventListener("cartUpdated", updateCartCount)

    return () => {
      window.removeEventListener("storage", updateCartCount)
      window.removeEventListener("cartUpdated", updateCartCount)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tekvana
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Beranda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Produk
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Tentang Kami
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5" />
            </Button>

            <Link href="/cart" className="relative">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Produk
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <Button variant="ghost" className="w-full justify-start hover:bg-gray-50">
                  <Search className="w-5 h-5 mr-2" />
                  Cari Produk
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
