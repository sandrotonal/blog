---
title: "Next.js App Router: Tam Rehber ve En İyi Pratikler"
date: "14 Şubat 2026"
description: "Server Components, streaming, caching — Next.js 15 ile production hazır uygulama geliştirmek."
---

Next.js App Router, React'in server component mimarisini tam anlamıyla benimseyen ilk production framework oldu.

## Server vs Client Components

App Router'da her bileşen varsayılan olarak Server Component'tir. İnteraktif özellikler için `"use client"` direktifi kullanılır. Bu ayrım, devasa JavaScript paketlerini tarayıcıya göndermekten bizi kurtarır.

## Veri Çekme (Data Fetching)

Artık `getServerSideProps` yok. Bunun yerine doğrudan bileşen içinde `async/await` kullanarak veri çekiyoruz.

```javascript
async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{/* ... */}</div>;
}
```

## Sonuç

Next.js 15 ve App Router, modern web geliştirmenin yeni standartlarını belirliyor. Daha az kod, daha yüksek performans.
