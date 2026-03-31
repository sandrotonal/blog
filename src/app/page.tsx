import type { Metadata } from "next";
import { BlogHeader } from "@/components/BlogHeader";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Ömer Özbay — Türkiye'nin Teknoloji ve Yapay Zeka Blogu",
  description:
    "Yapay zeka, NVIDIA, MCP, SEO, yazılım geliştirme ve Türkiye'nin teknoloji ekosistemi üzerine derinlemesine Türkçe analizler.",
  keywords: [
    "yapay zeka",
    "teknoloji",
    "SEO",
    "NVIDIA",
    "MCP",
    "React",
    "Next.js",
    "TypeScript",
    "Türkiye teknoloji",
    "yazılım",
    "LLM",
  ],
  openGraph: {
    title: "Ömer Özbay — Türkiye'nin Teknoloji ve Yapay Zeka Blogu",
    description:
      "Yapay zeka, NVIDIA, MCP, SEO ve yazılım üzerine Türkçe derinlemesine analizler.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ömer Özbay — Türkiye'nin Teknoloji ve Yapay Zeka Blogu",
    description:
      "Yapay zeka, NVIDIA, MCP, SEO ve yazılım üzerine Türkçe derinlemesine analizler.",
  },
  alternates: {
    canonical: "https://gucluyumhe.dev/blog",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto flex w-full max-w-[736px] flex-col gap-16 px-5 py-14 sm:px-8 sm:py-20">
        <BlogHeader />

        <section className="space-y-10">
          <div className="space-y-4 sm:space-y-5">
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.35em] text-slate-500">
              Ömer Özbay
            </p>
            <h1 className="max-w-[42rem] text-[34px] leading-[1.1] sm:text-[48px] sm:leading-[1.05] font-black tracking-[-0.02em] sm:tracking-[-0.03em] text-slate-950">
              Yapay zeka, yazılım ve Türkiye teknoloji ekosistemi üzerine derinlemesine analizler.
            </h1>
            <p className="max-w-[36rem] text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-slate-600">
              NVIDIA, MCP, SEO, React ve daha fazlası. Geliştiriciler, girişimciler ve meraklılar için Türkçe içerikler.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
