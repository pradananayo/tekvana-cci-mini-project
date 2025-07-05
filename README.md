# Tekvana - Mini E-commerce Website

Sebuah website e-commerce mini yang dibangun dengan Next.js dan Tailwind CSS untuk menampilkan produk elektronik dan teknologi.

## 🌐 Live Demo
**[https://tekvana.vercel.app/](https://tekvana.vercel.app/)**

## 📋 Deskripsi Proyek
Tekvana adalah platform e-commerce yang fokus pada produk teknologi dan elektronik. Website ini dibuat sebagai proyek mini untuk mendemonstrasikan kemampuan pengembangan web modern dengan fitur-fitur lengkap seperti katalog produk, keranjang belanja, dan sistem checkout.

## ✨ Fitur Utama
- 🏠 **Homepage** dengan hero section dan produk unggulan
- 📱 **Katalog Produk** dengan grid layout responsif
- 🔍 **Detail Produk** dengan informasi lengkap dan rating
- 🛒 **Keranjang Belanja** dengan fungsi tambah/kurang/hapus item
- 💳 **Halaman Checkout** dengan form pembayaran
- 📄 **Halaman About** dengan informasi perusahaan
- 📱 **Responsive Design** untuk semua ukuran layar
- 🎨 **Modern UI/UX** dengan gradien dan animasi

## 🛠️ Teknologi yang Digunakan
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **API**: FakeStore API untuk data produk
- **Deployment**: Vercel
- **Language**: TypeScript

## 🚀 Cara Menjalankan Lokal

\`\`\`bash
# Clone repository
git clone https://github.com/username/tekvana-ecommerce.git

# Masuk ke direktori
cd tekvana-ecommerce

# Install dependencies
npm install

# Jalankan development server
npm run dev
\`\`\`

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Proyek
\`\`\`
tekvana/
├── app/                    # App Router pages
│   ├── page.tsx           # Homepage
│   ├── products/          # Halaman produk
│   ├── cart/              # Keranjang belanja
│   ├── checkout/          # Checkout
│   └── about/             # Tentang kami
├── components/            # Komponen React
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   ├── ProductCard.tsx    # Card produk
│   └── ProductGrid.tsx    # Grid produk
├── lib/                   # Utilities & API
│   └── api.ts            # API functions
└── public/               # Static assets
\`\`\`

## 🎯 Fitur Khusus
- **Lokalisasi Indonesia**: Bahasa, mata uang (IDR), dan konteks lokal
- **Data Dinamis**: Menggunakan FakeStore API untuk produk elektronik
- **State Management**: Local Storage untuk keranjang belanja
- **Loading States**: Spinner dan skeleton loading
- **Error Handling**: Fallback untuk API errors
- **SEO Optimized**: Meta tags dan struktur HTML yang baik

## 👨‍💻 Dibuat Oleh
**[Nama Anda]** - Mahasiswa CCI Telkom University

## 📄 Lisensi
Proyek ini dibuat untuk keperluan edukasi dan portfolio.

---
*Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS*
