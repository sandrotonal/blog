import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { BlogHeader } from "@/components/BlogHeader";
import { posts } from "@/lib/posts";

import { getPostData, getSortedPostsData } from "@/lib/posts";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [
      "yapay zeka",
      "teknoloji",
      "Türkiye",
      "yazılım",
      post.title.split(" ").slice(0, 3).join(" "),
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "tr_TR",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://gucluyumhe.dev/blog/${slug}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto flex w-full max-w-[736px] flex-col gap-10 sm:gap-14 px-5 py-14 sm:px-8 sm:py-20">
        <BlogHeader />

        <article>
          {/* Article structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                description: post.description,
                datePublished: post.date,
                author: {
                  "@type": "Person",
                  name: "Ömer Özbay",
                  url: "https://gucluyumhe.dev",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Ömer Özbay",
                  url: "https://gucluyumhe.dev",
                },
              }),
            }}
          />

          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <p className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.35em] text-slate-500">
              {post.date}
            </p>
            <h1 className="text-[30px] sm:text-[48px] leading-[1.1] sm:leading-[1.05] font-black tracking-[-0.02em] sm:tracking-[-0.03em] text-slate-950">
              {post.title}
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-slate-500">
              {post.description}
            </p>
          </div>

          <div 
            className="post-content space-y-4 sm:space-y-5"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
          />


          <div className="pt-10 sm:pt-12 mt-4 border-t border-slate-200">
            <Link
              href="/"
              className="text-[14px] sm:text-[15px] font-semibold text-slate-950 underline underline-offset-4 decoration-slate-400 hover:decoration-slate-700 transition-colors"
            >
              ← Tüm yazılara dön
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
