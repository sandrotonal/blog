import { getSortedPostsData } from "./md-utils";
import type { BlogPost } from "@/types/blog";

// Artik posts verisi src/content/posts klasöründen dinamik olarak geliyor.
// Bu degiskeni geriye dönük uyumluluk icin koruyoruz.
export const posts: BlogPost[] = getSortedPostsData();

export { getPostData, getSortedPostsData } from "./md-utils";
