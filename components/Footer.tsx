import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* decorative background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tekvana
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Mitra terpercaya Anda untuk teknologi canggih dan elektronik premium. Rasakan inovasi terdepan.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Tautan Cepat</h4>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "/" },
                { name: "Produk", href: "/products" },
                { name: "Tentang Kami", href: "/about" },
                { name: "Keranjang Belanja", href: "/cart" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Layanan Pelanggan</h4>
            <ul className="space-y-3">
              {["Hubungi Dukungan", "Informasi Pengiriman", "Pengembalian & Tukar", "Kebijakan Garansi", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Info Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Jl. Teknologi No. 123</p>
                  <p>Jakarta Selatan, DKI Jakarta 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400">021-TECH-STORE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">support@tekvana.co.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Tekvana. Semua hak dilindungi. |
            <span className="text-blue-400 hover:text-blue-300 cursor-pointer ml-1">Kebijakan Privasi</span> |
            <span className="text-blue-400 hover:text-blue-300 cursor-pointer ml-1">Syarat Layanan</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
