# Tekvana - E-commerce Website

Tekvana adalah website e-commerce modern yang menampilkan berbagai produk teknologi dan elektronik. Dibangun menggunakan **Next.js** dan **Tailwind CSS**, website ini dirancang responsif dengan antarmuka yang bersih dan intuitif.

## Live Demo

[https://tekvana.vercel.app](https://tekvana.vercel.app)

## Deskripsi Proyek

Proyek ini dikembangkan sebagai mini project untuk mendemonstrasikan kemampuan pengembangan front-end menggunakan stack modern. Tekvana menyediakan fitur lengkap seperti katalog produk, detail produk, keranjang belanja, dan checkout.

## Fitur Utama

* Halaman beranda dengan hero section dan produk pilihan
* Katalog produk dengan tampilan grid yang responsif
* Detail produk lengkap dengan deskripsi, harga, dan rating
* Keranjang belanja dengan fitur tambah, kurang, dan hapus item
* Halaman checkout dengan form isian sederhana
* Halaman tentang kami untuk informasi perusahaan
* Desain responsif untuk berbagai ukuran layar
* Tampilan UI/UX modern dengan animasi dan transisi halus

## Teknologi yang Digunakan

* **Framework**: Next.js 14 (App Router)
* **Styling**: Tailwind CSS
* **Komponen UI**: shadcn/ui
* **Icons**: Lucide React
* **API**: FakeStore API
* **Deployment**: Vercel
* **Bahasa**: TypeScript

## Cara Menjalankan di Lokal

```bash
# Clone repositori
git clone https://github.com/username/tekvana-ecommerce.git

# Masuk ke direktori proyek
cd tekvana-ecommerce

# Install dependencies
npm install

# Jalankan server pengembangan
npm run dev
# Buka http://localhost:3000 di browser
```

## Struktur Proyek

```
tekvana/
├── app/                    # Halaman berbasis App Router
│   ├── page.tsx           # Halaman utama (homepage)
│   ├── products/          # Daftar produk
│   ├── cart/              # Keranjang belanja
│   ├── checkout/          # Proses checkout
│   └── about/             # Tentang perusahaan
├── components/            # Komponen UI
│   ├── Header.tsx         # Navigasi utama
│   ├── Footer.tsx         # Footer website
│   ├── ProductCard.tsx    # Kartu produk
│   └── ProductGrid.tsx    # Tampilan grid produk
├── lib/                   # Utility dan fungsi API
│   └── api.ts             # Fungsi untuk mengambil data produk
└── public/                # Aset statis
```

## Kontributor

**Pindwa Pradana Nayottama**

## Lisensi

Proyek ini dibuat untuk keperluan edukasi dan portofolio pribadi.

---

Dikembangkan dengan Next.js dan Tailwind CSS.
