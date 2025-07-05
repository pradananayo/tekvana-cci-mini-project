export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
  features?: string[]
}

// Convert USD to IDR (approximate rate: 1 USD = 15,000 IDR)
const convertToIDR = (usdPrice: number): number => {
  return Math.round(usdPrice * 15000)
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products/category/electronics", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch products")
    }

    const products = await res.json()

    // Transform FakeStore API format to our Product interface
    return products.map((product: any) => ({
      id: product.id,
      title: product.title,
      price: convertToIDR(product.price), // Convert to IDR
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
      features: generateTechFeatures(product.title), // Generate relevant tech features
    }))
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    })

    if (!res.ok) return null

    const product = await res.json()

    // Only return if it's an electronics product
    if (product.category !== "electronics") {
      return null
    }

    return {
      id: product.id,
      title: product.title,
      price: convertToIDR(product.price), // Convert to IDR
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
      features: generateTechFeatures(product.title),
    }
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

// Helper function to generate relevant tech features based on product title
function generateTechFeatures(title: string): string[] {
  const lowerTitle = title.toLowerCase()

  if (lowerTitle.includes("ssd") || lowerTitle.includes("hard drive")) {
    return [
      "Transfer data berkecepatan tinggi",
      "Solusi penyimpanan yang handal",
      "Kompatibel dengan sebagian besar perangkat",
      "Hemat energi",
      "Konstruksi tahan lama",
    ]
  }

  if (lowerTitle.includes("monitor") || lowerTitle.includes("screen")) {
    return [
      "Layar resolusi tinggi",
      "Berbagai pilihan konektivitas",
      "Stand yang dapat disesuaikan",
      "Teknologi perlindungan mata",
      "Sudut pandang lebar",
    ]
  }

  if (lowerTitle.includes("keyboard") || lowerTitle.includes("mouse")) {
    return [
      "Desain ergonomis",
      "Konektivitas nirkabel",
      "Daya tahan baterai lama",
      "Pelacakan presisi",
      "Pengaturan yang dapat disesuaikan",
    ]
  }

  if (lowerTitle.includes("headphone") || lowerTitle.includes("earphone")) {
    return [
      "Kualitas suara premium",
      "Peredam bising",
      "Kenyamanan maksimal",
      "Daya tahan baterai lama",
      "Konektivitas nirkabel",
    ]
  }

  // Default tech features
  return ["Teknologi terdepan", "Performa tinggi", "Kualitas build terbaik", "Desain ramah pengguna", "Nilai terbaik"]
}
