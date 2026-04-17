# Ömer Özbay — Teknoloji & Yapay Zeka Blogu

Yapay zeka, yazılım geliştirme ve Türkiye teknoloji ekosistemi üzerine Türkçe derinlemesine analizler.

🌐 **Canlı:** [gucluyumhe.dev/blog](https://gucluyumhe.dev/blog)

## Hakkında

Bu blog; NVIDIA, MCP, SEO, React, Next.js, TypeScript, Docker ve daha birçok konu hakkında geliştiriciler, girişimciler ve teknoloji meraklıları için Türkçe içerikler sunar.

## Teknoloji Yığını

- **[Next.js 16](https://nextjs.org/)** — App Router, React 19, TypeScript (strict)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — oklch design token'ları
- **[shadcn/ui](https://ui.shadcn.com/)** — Radix primitives
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** + **[remark](https://remark.js.org/)** — Markdown işleme
- **[Geist](https://vercel.com/font)** — Yazı tipi

## Proje Yapısı

```
src/
  app/                    # Next.js App Router sayfaları
    [slug]/page.tsx       # Tekil blog yazısı sayfası
    page.tsx              # Ana sayfa (yazı listesi)
    layout.tsx            # Kök layout
  components/
    BlogHeader.tsx        # Site başlığı ve navigasyon
    PostCard.tsx          # Blog yazısı kartı
    ui/                   # shadcn/ui bileşenleri
  content/
    posts/                # Markdown blog yazıları (.md)
  lib/
    posts.ts              # Markdown okuma ve işleme
    utils.ts              # cn() yardımcısı
  types/
    blog.ts               # TypeScript arayüzleri
public/
  images/                 # Statik görseller
```

## Geliştirme Ortamı

### Gereksinimler

- [Node.js](https://nodejs.org/) 24+

### Kurulum

```bash
git clone https://github.com/sandrotonal/blog.git
cd blog
npm install
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışır.

### Komutlar

```bash
npm run dev        # Geliştirme sunucusunu başlat
npm run build      # Prodüksiyon derlemesi
npm run start      # Prodüksiyon sunucusunu başlat
npm run lint       # ESLint kontrolü
npm run typecheck  # TypeScript tip kontrolü
npm run check      # lint + typecheck + build (tümü)
```

### Docker ile çalıştırma

```bash
docker compose up app --build   # Prodüksiyon modunda çalıştır
docker compose up dev --build   # Geliştirme modunda çalıştır (port 3001)
```

## Yeni Blog Yazısı Ekleme

`src/content/posts/` klasörüne yeni bir `.md` dosyası oluştur:

```markdown
---
title: "Yazı Başlığı"
date: "15 Nisan 2026"
description: "Yazının kısa açıklaması."
---

Yazı içeriği buraya gelir...
```

Dosya adı (örn. `yazi-basligi.md`) otomatik olarak URL slug'ı olur.

## Lisans

MIT
