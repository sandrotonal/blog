import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techtr.dev"),
  title: {
    default: "Ömer Özbay — Türkiye'nin Teknoloji ve Yapay Zeka Blogu",
    template: "%s — Ömer Özbay",
  },
  description:
    "Yapay zeka, NVIDIA, MCP, SEO, yazılım geliştirme ve Türkiye teknoloji ekosistemi üzerine Türkçe analizler.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Ömer Özbay",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3025319240210100"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <body className="min-h-full flex flex-col bg-white text-slate-950">
        {children}
      </body>
    </html>
  );
}
