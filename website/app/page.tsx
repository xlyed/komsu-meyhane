import { content } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
      <div className="max-w-2xl flex flex-col gap-10 text-center">
        <p className="text-gold-sunset uppercase tracking-[0.3em] text-xs font-body font-medium">
          Kurulum tamamlandı
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-light text-cream leading-[1.1] tracking-[0.04em]">
          {content.hero.title}
        </h1>

        <p className="font-display italic text-amber-candle text-xl md:text-2xl font-light">
          {content.hero.subtitle}
        </p>

        <div className="h-px w-24 bg-gold-sunset/40 mx-auto" />

        <p className="font-body text-cream-warm/70 text-sm leading-relaxed max-w-md mx-auto">
          Bu sayfa sadece kurulumun çalıştığını gösteriyor. Renk paleti, fontlar
          ve placeholder içerikler hazır. Bir sonraki adımda Hero bölümü
          eklenecek.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-4 text-xs font-body text-gray-stone">
          <span className="px-3 py-1 rounded-full bg-navy-soft">navy-deep</span>
          <span className="px-3 py-1 rounded-full bg-navy-soft">navy-soft</span>
          <span className="px-3 py-1 rounded-full bg-gold-sunset text-navy-deep">
            gold-sunset
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-candle text-navy-deep">
            amber-candle
          </span>
          <span className="px-3 py-1 rounded-full bg-cream text-navy-deep">
            cream
          </span>
        </div>
      </div>
    </main>
  );
}
