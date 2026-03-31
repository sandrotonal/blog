import Link from "next/link";
import Image from "next/image";

export function BlogHeader() {
  return (
    <header className="flex w-full items-center justify-between gap-3">
      {/* Sol: Blog adı / logo */}
      <Link
        href="/"
        className="text-[15px] sm:text-[18px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-950 hover:text-slate-600 transition-colors"
      >
        Ömer Özbay
      </Link>

      {/* Sağ: Avatar + isim */}
      <Link
        href="https://gucluyumhe.dev/"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 rounded-full"
        aria-label="Ömer Özbay kişisel sitesi"
      >
        <span className="text-[12px] sm:text-[13px] text-slate-500 group-hover:text-slate-700 transition-colors">
          by
        </span>
        {/* Dairesel profil resmi */}
        <div className="relative h-7 w-7 sm:h-8 sm:w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-200 group-hover:ring-slate-400 transition-all">
          <Image
            src="/images/omer.jpeg"
            alt="Ömer Özbay"
            fill
            className="object-cover object-top"
            sizes="32px"
          />
        </div>
        <span className="text-[12px] sm:text-[13px] font-semibold text-slate-950 underline underline-offset-4 decoration-slate-300 group-hover:decoration-slate-600 transition-colors">
        </span>
      </Link>
    </header>
  );
}
