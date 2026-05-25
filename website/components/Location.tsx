import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";
import { content } from "@/lib/content";

export function Location() {
  const loc = content.location;
  return (
    <section
      id="location"
      className="relative bg-navy-deep py-28 md:py-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn className="max-w-2xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-sunset mb-5 leading-[1.2]">
            {loc.eyebrow}
          </p>
          <TextReveal
            as="h2"
            text={loc.sectionTitle}
            stagger={0.07}
            delay={0.1}
            className="font-display font-light text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[0.02em]"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mt-16 md:mt-20 items-stretch">
          <FadeIn className="lg:col-span-3 order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px] overflow-hidden border border-cream/10">
              <iframe
                title={`${loc.name} — Google Maps`}
                src={loc.mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ filter: "grayscale(0.3) contrast(1.05) brightness(0.92)" }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2 order-1 lg:order-2">
            <div className="h-full flex flex-col justify-between gap-8 lg:py-2 lg:pl-8 lg:border-l lg:border-ocean-soft/30">
              <ul className="space-y-7">
                <li className="group flex gap-4">
                  <span className="shrink-0 mt-1 text-gold-sunset transition-colors duration-500 group-hover:text-amber-candle">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.25em] uppercase text-amber-candle/70 mb-1.5">
                      Adres
                    </p>
                    <p className="font-display text-cream text-lg md:text-xl leading-snug">
                      {loc.address}
                    </p>
                  </div>
                </li>

                <li className="group flex gap-4">
                  <span className="shrink-0 mt-1 text-gold-sunset transition-colors duration-500 group-hover:text-amber-candle">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.25em] uppercase text-amber-candle/70 mb-1.5">
                      Telefon
                    </p>
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="font-display text-cream text-lg md:text-xl leading-snug hover:text-amber-candle transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </li>

                <li className="group flex gap-4">
                  <span className="shrink-0 mt-1 text-gold-sunset transition-colors duration-500 group-hover:text-amber-candle">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.25em] uppercase text-amber-candle/70 mb-1.5">
                      Çalışma Saatleri
                    </p>
                    <p className="font-display text-cream text-lg md:text-xl leading-snug">
                      {loc.hours}
                    </p>
                    <p className="font-body italic text-cream-warm/40 text-xs mt-1.5">
                      {loc.hoursNote}
                    </p>
                  </div>
                </li>
              </ul>

              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 border border-cream/30 hover:border-gold-sunset hover:bg-gold-sunset hover:text-navy-deep px-6 h-12 font-body text-sm tracking-wide text-cream transition-all duration-300 self-start"
              >
                <span>{loc.directionsLabel}</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
