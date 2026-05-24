"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, type ReactNode } from "react";

export type LightboxItem = {
  caption?: string;
  render: () => ReactNode;
};

type Props = {
  open: boolean;
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ open, items, index, onClose, onPrev, onNext }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const overlayDuration = prefersReducedMotion ? 0.001 : 0.35;
  const contentInitial = prefersReducedMotion
    ? { opacity: 0, scale: 1 }
    : { opacity: 0, scale: 0.96 };
  const contentExit = prefersReducedMotion
    ? { opacity: 0, scale: 1 }
    : { opacity: 0, scale: 0.96 };

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [open, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const current = items[index];

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: overlayDuration, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed inset-0 z-100 bg-navy-deep/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Görsel önizleme"
        >
          <button
            type="button"
            aria-label="Kapat"
            onClick={onClose}
            className="absolute top-5 right-5 md:top-8 md:right-8 z-10 text-cream/70 hover:text-cream p-2 transition-colors"
          >
            <X size={26} />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Önceki"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 text-cream/60 hover:text-cream p-3 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                type="button"
                aria-label="Sonraki"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 text-cream/60 hover:text-cream p-3 transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <motion.div
            key={index}
            initial={contentInitial}
            animate={{ opacity: 1, scale: 1 }}
            exit={contentExit}
            transition={{ duration: overlayDuration, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[70vh] flex items-center justify-center">
              {current.render()}
            </div>
            {current.caption && (
              <p className="font-display italic font-light text-amber-candle/90 text-base md:text-lg text-center max-w-2xl">
                {current.caption}
              </p>
            )}
            {items.length > 1 && (
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-cream-warm/40">
                {index + 1} / {items.length}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
