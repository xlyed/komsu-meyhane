"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { content } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled || mobileOpen
          ? "bg-navy-deep/95 backdrop-blur-md border-b border-cream/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-3 hover:text-amber-candle transition-colors"
          onClick={() => setMobileOpen(false)}
          aria-label={content.brand.name}
        >
          <span className="relative block w-9 h-9 md:w-10 md:h-10 shrink-0">
            <Image
              src="/images/logo.png"
              alt=""
              width={40}
              height={40}
              priority
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                scrolled || mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/images/logo-original.png"
              alt=""
              width={40}
              height={40}
              priority
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                scrolled || mobileOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
          <span className="font-display text-lg md:text-xl text-cream tracking-[0.08em] group-hover:text-amber-candle transition-colors">
            {content.brand.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {content.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative inline-block font-body text-sm text-cream-warm/80 hover:text-amber-candle transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-amber-candle/70 after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={content.nav.reserveHref}
              className="font-body text-sm text-navy-deep bg-gold-sunset hover:bg-amber-candle hover:-translate-y-px px-5 h-10 inline-flex items-center transition duration-300"
            >
              {content.nav.reserveLabel}
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
          className="md:hidden text-cream p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-96 border-t border-cream/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {content.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-display text-xl text-cream py-3 hover:text-amber-candle transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={content.nav.reserveHref}
              onClick={() => setMobileOpen(false)}
              className="block text-center font-body text-base text-navy-deep bg-gold-sunset hover:bg-amber-candle py-3 transition-colors"
            >
              {content.nav.reserveLabel}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
