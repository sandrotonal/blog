import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  contentHtml?: string;
}

/**
 * Türkçe tarih dizisini (örn: "28 Mart 2026") Date objesine çevirir.
 */
function parseTurkishDate(dateStr: string): Date {
  const months: { [key: string]: number } = {
    "Ocak": 0, "Şubat": 1, "Mart": 2, "Nisan": 3, "Mayıs": 4, "Haziran": 5,
    "Temmuz": 6, "Ağustos": 7, "Eylül": 8, "Ekim": 9, "Kasım": 10, "Aralık": 11
  };

  const parts = dateStr.split(" ");
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = months[parts[1]] ?? 0;
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  }
  return new Date(0); // Hata durumunda en eski tarih
}

export function getSortedPostsData(): PostData[] {
  // src/content/posts klasörünü oku
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Dosya adından slug oluştur
      const slug = fileName.replace(/\.md$/, "");

      // Markdown dosyasını oku
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Frontmatter kısmını parse et
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as { title: string; date: string; description: string }),
      };
    });

  // Tarihe göre sırala (Yeni en üstte)
  return allPostsData.sort((a, b) => {
    const dateA = parseTurkishDate(a.date);
    const dateB = parseTurkishDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export async function getPostData(slug: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Frontmatter ve içeriği ayır
  const { data, content } = matter(fileContents);

  // Markdown'ı HTML'e çevir
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(data as { title: string; date: string; description: string }),
  };
}
