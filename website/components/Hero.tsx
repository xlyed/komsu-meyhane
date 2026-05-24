"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { content } from "@/lib/content";

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const baseDelay = prefersReducedMotion ? 0 : 0.15;
  const stagger = prefersReducedMotion ? 0 : 0.18;
  const duration = prefersReducedMotion ? 0.001 : 0.9;

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-end"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(160deg, #0B1B2B 0%, #1A2E42 38%, #3D5A7A 65%, #C8954C 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 85% 95%, rgba(232,184,114,0.35), transparent 60%), linear-gradient(to top, rgba(11,27,43,0.85) 0%, rgba(11,27,43,0.35) 40%, rgba(11,27,43,0.1) 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-2xl md:ml-auto md:text-right">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: baseDelay, ease: EASE }}
            className="font-body text-xs tracking-[0.3em] uppercase text-gold-sunset mb-6"
          >
            Ayvalık · Deniz Kenarı
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: baseDelay + stagger, ease: EASE }}
            className="font-display font-light text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[0.04em]"
          >
            {content.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration,
              delay: baseDelay + stagger * 2,
              ease: EASE,
            }}
            className="font-display italic font-light text-amber-candle text-xl md:text-2xl mt-6 leading-snug"
          >
            {content.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration,
              delay: baseDelay + stagger * 3,
              ease: EASE,
            }}
            className="flex flex-wrap gap-3 mt-10 md:justify-end"
          >
            <Button
              href={content.hero.ctaPrimary.href}
              variant="primary"
              size="lg"
            >
              {content.hero.ctaPrimary.label}
            </Button>
            <Button
              href={content.hero.ctaSecondary.href}
              variant="outline"
              size="lg"
            >
              {content.hero.ctaSecondary.label}
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.4, delay: 1.6, ease: EASE }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-warm/60"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">
          {content.hero.scrollHint}
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>

      <p className="absolute top-24 right-6 md:right-10 z-10 font-body text-[10px] tracking-wider uppercase text-cream-warm/40">
        Görsel placeholder · Video gelince değişecek
      </p>
    </section>
  );
}
