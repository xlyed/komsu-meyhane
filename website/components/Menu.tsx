import { Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";
import { content } from "@/lib/content";

export function Menu() {
  return (
    <section
      id="menu"
      className="relative bg-navy-deep py-28 md:py-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-sunset mb-5 leading-[1.2]">
            {content.menu.eyebrow}
          </p>
          <TextReveal
            as="h2"
            text={content.menu.sectionTitle}
            stagger={0.07}
            delay={0.1}
            className="font-display font-light text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[0.02em]"
          />
          <p className="font-body text-cream-warm/70 text-base md:text-lg mt-6 leading-relaxed">
            {content.menu.intro}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-24">
          {content.menu.categories.map((category, i) => (
            <FadeIn
              key={category.key}
              delay={(i % 2) * 0.1 + Math.floor(i / 2) * 0.05}
            >
              <article className="group relative h-full border border-cream/10 bg-navy-soft/30 p-8 md:p-10 transition-all duration-500 ease-out hover:border-gold-sunset/30 hover:bg-navy-soft/50 hover:-translate-y-1 hover:shadow-[inset_0_0_24px_rgba(232,184,114,0.05)]">
                <header className="mb-6">
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-amber-candle/70 mb-2">
                    {category.subtitle}
                  </p>
                  <h3 className="font-display font-light text-cream text-3xl md:text-4xl leading-tight tracking-wide">
                    {category.title}
                  </h3>
                  <span
                    aria-hidden
                    className="block mt-5 h-px w-12 bg-gold-sunset/50 transition-all duration-500 group-hover:w-20 group-hover:bg-gold-sunset"
                  />
                </header>

                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3"
                    >
                      <span className="font-display text-cream text-lg md:text-xl leading-tight whitespace-nowrap">
                        {item.name}
                      </span>
                      <span
                        aria-hidden
                        className="hidden sm:block flex-1 border-b border-dotted border-gray-stone/30 -translate-y-1"
                      />
                      <span className="font-display italic text-amber-candle/80 text-sm md:text-base leading-snug">
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 md:mt-20 flex flex-col items-center gap-5 text-center">
            <p className="font-display italic font-light text-cream-warm/80 text-lg md:text-xl">
              {content.menu.note}
            </p>
            <a
              href={`tel:${content.location.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 border border-cream/30 hover:border-gold-sunset hover:text-gold-sunset px-7 h-12 font-body text-sm tracking-wide text-cream transition-all duration-300"
            >
              <Phone size={15} />
              {content.location.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
