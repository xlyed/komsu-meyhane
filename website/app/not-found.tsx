import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 text-center bg-navy-deep">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-sunset mb-6">
        404
      </p>
      <h1 className="font-display font-light text-cream text-4xl md:text-5xl tracking-[0.04em] max-w-lg leading-tight">
        Bu sokaktan geçen yok.
      </h1>
      <p className="font-display italic text-amber-candle/90 text-lg md:text-xl mt-5 max-w-md leading-relaxed">
        Aradığın sayfayı bulamadık. Ana sofraya dönmek istersen, kapımız açık.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2.5 bg-gold-sunset hover:bg-amber-candle text-navy-deep px-7 h-12 font-body text-sm tracking-wide transition-colors"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
        Ana Sayfaya Dön
      </Link>
    </main>
  );
}
