import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Truck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* decorative background pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">Teknologi Terbaru</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Selamat Datang di{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tekvana
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Temukan teknologi canggih dan elektronik premium dengan harga terbaik.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Belanja Sekarang
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 bg-transparent"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Gratis Ongkir</h3>
                  <p className="text-sm text-gray-300">Pembelian di atas Rp 750.000</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Garansi 2 Tahun</h3>
                  <p className="text-sm text-gray-300">Untuk semua produk</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Dukungan Cepat</h3>
                  <p className="text-sm text-gray-300">Layanan pelanggan 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Animation */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl mx-auto flex items-center justify-center animate-pulse">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Teknologi Premium</h3>
                  <p className="text-gray-300">Rasakan Inovasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
