import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tekvana - Teknologi Terdepan & Elektronik Premium",
  description:
    "Temukan teknologi canggih dan elektronik premium dengan harga terbaik. Dari monitor hingga SSD, kami memiliki semua yang Anda butuhkan.",
  keywords: "elektronik, teknologi, monitor, SSD, gadget, indonesia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
