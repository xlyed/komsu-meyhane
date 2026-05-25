"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { content } from "@/lib/content";

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const baseDelay = prefersReducedMotion ? 0 : 0.15;
  const stagger = prefersReducedMotion ? 0 : 0.18;
  const duration = prefersReducedMotion ? 0.001 : 0.9;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const videoBase = isMobile ? "/video/hero-mobile" : "/video/hero-desktop";

  return (
    <section
      id="top"
      className="relative isolate min-h-svh w-full overflow-hidden flex items-end"
    >
      <video
        key={videoBase}
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src={`${videoBase}.webm`} type="video/webm" />
        <source src={`${videoBase}.mp4`} type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 z-1"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 85% 95%, rgba(232,184,114,0.25), transparent 60%), linear-gradient(to top, rgba(11,27,43,0.85) 0%, rgba(11,27,43,0.45) 40%, rgba(11,27,43,0.25) 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-2xl md:ml-auto md:text-right">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: baseDelay, ease: EASE }}
            className="font-body text-xs tracking-[0.3em] uppercase text-gold-sunset mb-6 leading-[1.2]"
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

    </section>
  );
}
