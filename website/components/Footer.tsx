import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { content } from "@/lib/content";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const { footer, location } = content;
  const hasInstagram = footer.instagramUrl.length > 0;

  return (
    <footer className="relative bg-navy-soft pt-20 pb-10 md:pt-24 md:pb-12">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold-sunset/30 to-transparent"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          <div className="md:col-span-1">
            <Image
              src="/images/logo-original.png"
              alt=""
              width={72}
              height={72}
              className="w-16 h-16 md:w-18 md:h-18 mb-5"
            />
            <h3 className="font-display font-light text-cream text-2xl md:text-3xl tracking-[0.06em]">
              {content.brand.name}
            </h3>
            <p className="font-display italic text-amber-candle/80 text-base md:text-lg mt-3 leading-snug max-w-xs">
              {footer.tagline}
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold-sunset mb-5">
              {footer.contactEyebrow}
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="font-display text-cream text-base md:text-lg hover:text-amber-candle transition-colors"
                >
                  {location.phone}
                </a>
              </li>
              <li>
                <p className="font-body text-cream-warm/70 text-sm leading-relaxed">
                  {location.address}
                </p>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold-sunset mb-5">
              {footer.socialEyebrow}
            </p>
            {hasInstagram ? (
              <a
                href={footer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-display text-cream text-base md:text-lg hover:text-amber-candle transition-colors"
              >
                <InstagramIcon size={18} />
                <span>{footer.instagramHandle}</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2.5 text-cream-warm/60">
                <InstagramIcon size={18} />
                <span className="font-display text-base md:text-lg">Instagram</span>
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-cream-warm/40 border border-cream-warm/15 px-2 py-0.5 ml-1">
                  {footer.socialPending}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream-warm/40">
            {footer.copyright}
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-cream-warm/50 hover:text-amber-candle transition-colors"
          >
            <span>{footer.backToTop}</span>
            <ArrowUp
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
