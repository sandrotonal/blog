import type { BlogPost } from "@/types/blog";
import Link from "next/link";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="group block transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-4 rounded-sm"
    >
      <article className="space-y-1.5 sm:space-y-2">
        <h2 className="text-[22px] sm:text-[28px] leading-[1.15] sm:leading-[28px] font-black text-slate-950 group-hover:text-slate-700 transition-colors">
          {post.title}
        </h2>
        <p className="text-[12px] sm:text-[13px] leading-[19.5px] text-slate-500">
          {post.date}
        </p>
        <p className="text-[15px] leading-7 text-slate-700">
          {post.description}
        </p>
      </article>
    </Link>
  );
}
