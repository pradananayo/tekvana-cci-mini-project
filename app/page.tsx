import { Suspense } from "react"
import ProductGrid from "@/components/ProductGrid"
import Hero from "@/components/Hero"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Zap, Shield, Truck, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Tekvana?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman berbelanja teknologi terbaik dengan kualitas dan layanan yang tak
              tertandingi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Gratis Ongkir",
                description: "Pengiriman gratis untuk semua pesanan di atas Rp 750.000",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Shield,
                title: "Pembayaran Aman",
                description: "100% pembayaran aman",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Award,
                title: "Jaminan Kualitas",
                description: "Garansi uang kembali 30 hari jika tidak puas untuk semua produk ",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Zap,
                title: "Dukungan 24/7",
                description: "Dukungan pelanggan sepanjang waktu via chat & email",
                color: "from-orange-500 to-orange-600",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan pilihan produk teknologi premium yang telah kami kurasi khusus dengan harga terbaik.
            </p>
          </div>
          <Suspense fallback={<LoadingSpinner />}>
            <ProductGrid />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
