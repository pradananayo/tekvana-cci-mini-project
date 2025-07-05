import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Tentang Kami</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Cerita Kami</h2>
            <p className="text-gray-600 mb-4">
              Didirikan pada tahun 2025, Tekvana telah menjadi pelopor dalam menghadirkan teknologi terdepan kepada
              konsumen di seluruh Indonesia. Kami percaya bahwa setiap orang berhak mendapatkan akses ke produk-produk
              inovatif berkualitas tinggi yang dapat meningkatkan kehidupan sehari-hari mereka.
            </p>
            <p className="text-gray-600">
              Tim ahli kami dengan cermat mengkurasi setiap produk dalam katalog kami, memastikan bahwa kami hanya
              menawarkan item yang memenuhi standar ketat kami untuk kualitas, fungsionalitas, dan nilai.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Misi Kami</h2>
            <p className="text-gray-600 mb-4">
              Mendemokratisasi akses ke teknologi canggih dengan menyediakan produk-produk luar biasa dengan harga
              kompetitif, didukung oleh layanan pelanggan yang outstanding.
            </p>
            <p className="text-gray-600">
              Kami berkomitmen pada keberlanjutan dan praktik bisnis yang etis, bekerja sama dengan pemasok yang berbagi
              nilai-nilai kami dan dedikasi terhadap tanggung jawab lingkungan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Pengiriman Cepat</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Gratis ongkir untuk pesanan di atas Rp 750.000. Sebagian besar pesanan dikirim dalam 24 jam.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Jaminan Kualitas</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Kebijakan pengembalian 30 hari. Jika Anda tidak puas, kami akan membuatnya benar.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Dukungan Ahli</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Tim berpengetahuan kami siap membantu dengan pertanyaan atau kekhawatiran apa pun.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Hubungi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Mail className="w-8 h-8 mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">support@tekvana.co.id</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Phone className="w-8 h-8 mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-gray-600">021-TECH-STORE</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <MapPin className="w-8 h-8 mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Alamat</h3>
                <p className="text-gray-600 text-center">
                  Jl. Teknologi No. 123
                  <br />
                  Jakarta Selatan, DKI Jakarta 12345
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
