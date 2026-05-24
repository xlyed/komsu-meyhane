import Image from "next/image";
import { Flame, Waves, UtensilsCrossed } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { content } from "@/lib/content";

const cardVisuals = {
  candle: {
    src: "/images/atmosphere-candle.jpg",
    alt: "Gün batımında rakı doldurulan kadehler ve mum",
    Icon: Flame,
    iconTint: "text-amber-candle",
  },
  sea: {
    src: "/images/atmosphere-sea.jpg",
    alt: "Ayvalık'ta deniz kenarında meyhanenin gün batımı silüeti",
    Icon: Waves,
    iconTint: "text-cream",
  },
  table: {
    src: "/images/atmosphere-table.jpg",
    alt: "Zeytin ağacının altında hazırlanmış sofra ve deniz manzarası",
    Icon: UtensilsCrossed,
    iconTint: "text-gold-sunset",
  },
} as const;

type CardKey = keyof typeof cardVisuals;

export function Atmosphere() {
  return (
    <section
      id="atmosphere"
      className="relative bg-navy-deep py-28 md:py-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn className="max-w-2xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-sunset mb-5">
            {content.atmosphere.eyebrow}
          </p>
          <h2 className="font-display font-light text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[0.02em]">
            {content.atmosphere.sectionTitle}
          </h2>
          <p className="font-display italic font-light text-amber-candle text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            {content.atmosphere.lead}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-20 md:mt-28">
          {content.atmosphere.cards.map((card, i) => {
            const visual = cardVisuals[card.key as CardKey];
            const Icon = visual.Icon;
            const layout = [
              "md:col-span-7 md:row-start-1 aspect-[4/5] md:aspect-[5/6]",
              "md:col-span-5 md:row-start-1 md:mt-20 aspect-[4/5]",
              "md:col-span-6 md:col-start-4 md:-mt-10 aspect-[5/4]",
            ][i];

            return (
              <FadeIn
                key={card.key}
                delay={i * 0.12}
                className={layout}
              >
                <article className="relative w-full h-full group overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.03]">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-navy-deep/85 via-navy-deep/30 to-navy-deep/10" />

                  <div className="relative h-full flex flex-col justify-between p-7 md:p-9">
                    <div className="inline-flex items-center gap-2 w-fit border border-cream/20 px-3 py-1.5 bg-navy-deep/40 backdrop-blur-sm">
                      <Icon size={13} className={visual.iconTint} />
                      <span className="font-body text-[10px] tracking-[0.25em] uppercase text-cream-warm/80">
                        {card.title}
                      </span>
                    </div>
                    <p className="font-display italic font-light text-cream text-xl md:text-2xl leading-snug max-w-xs">
                      {card.caption}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
