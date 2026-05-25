"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import { TextReveal } from "@/components/ui/TextReveal";
import { content } from "@/lib/content";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = content.gallery.items;

  const lightboxItems: LightboxItem[] = items.map((item) => ({
    caption: item.caption,
    render: () => (
      <div
        className="w-full aspect-[3/2] max-h-[70vh] relative"
        style={{ background: item.gradient }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep/40 to-transparent" />
      </div>
    ),
  }));

  const open = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));

  return (
    <section
      id="gallery"
      className="relative bg-navy-soft py-28 md:py-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn className="max-w-2xl text-center mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-sunset mb-5 leading-[1.2]">
            {content.gallery.eyebrow}
          </p>
          <TextReveal
            as="h2"
            text={content.gallery.sectionTitle}
            stagger={0.07}
            delay={0.1}
            className="font-display font-light text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[0.02em]"
          />
          <p className="font-body italic text-cream-warm/60 text-sm md:text-base mt-5">
            {content.gallery.lead}
          </p>
          <span aria-hidden className="mx-auto mt-6 block h-px w-12 bg-ocean-soft/40" />
        </FadeIn>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 mt-16 md:mt-20">
          {items.map((item, i) => (
            <FadeIn
              key={i}
              delay={(i % 3) * 0.08}
              className={`block break-inside-avoid mb-5 md:mb-6 ${item.aspect}`}
            >
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`${item.caption} — büyük göster`}
                className="group relative w-full h-full overflow-hidden block rounded-sm transition-shadow duration-500 hover:ring-1 hover:ring-gold-sunset/20"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ background: item.gradient }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-deep/70 via-navy-deep/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-1 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="font-display italic font-light text-cream text-base md:text-lg leading-snug">
                    {item.caption}
                  </p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-[10px] tracking-[0.25em] uppercase text-cream-warm/30">
          Görseller placeholder · Fotoğraflar gelince yerleşecek
        </p>
      </div>

      <Lightbox
        open={openIndex !== null}
        items={lightboxItems}
        index={openIndex ?? 0}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
