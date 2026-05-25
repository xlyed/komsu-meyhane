import { FadeIn } from "@/components/ui/FadeIn";
import { content } from "@/lib/content";

export function Story() {
  const [first, ...rest] = content.story.paragraphs;
  const firstLetter = first.charAt(0);
  const firstRest = first.slice(1);

  return (
    <section
      id="story"
      className="relative bg-navy-soft py-32 md:py-44 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold-sunset/30 to-transparent"
      />

      <div className="max-w-2xl mx-auto px-6 md:px-8">
        <FadeIn className="text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-sunset mb-6 leading-[1.2]">
            {content.story.eyebrow}
          </p>
          <h2 className="font-display font-light text-cream text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-[0.02em]">
            {content.story.sectionTitle}
          </h2>
          <div className="flex justify-center mt-10">
            <span className="block h-px w-16 bg-gold-sunset/50" />
          </div>
        </FadeIn>

        <div className="mt-16 md:mt-20 space-y-10">
          <FadeIn delay={0.05}>
            <p className="font-display font-light text-cream-warm text-lg md:text-xl leading-[1.85] hyphens-auto">
              <span className="float-left font-display font-light text-amber-candle text-7xl md:text-8xl leading-[0.85] mr-3 mt-1">
                {firstLetter}
              </span>
              {firstRest}
            </p>
          </FadeIn>

          {rest.map((paragraph, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <p className="font-display font-light text-cream-warm text-lg md:text-xl leading-[1.85] hyphens-auto">
                {paragraph}
              </p>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <div className="pt-8 flex flex-col items-center gap-5">
              <span className="block h-px w-16 bg-amber-candle/40" />
              <p className="font-display italic font-light text-amber-candle text-2xl md:text-4xl tracking-wide text-center">
                {content.story.pullQuote}
              </p>
              <span className="block h-px w-16 bg-amber-candle/40" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
