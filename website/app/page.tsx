import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Atmosphere } from "@/components/Atmosphere";
import { Story } from "@/components/Story";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Atmosphere />
        <div
          aria-hidden
          className="h-5 bg-linear-to-b from-navy-deep to-navy-soft"
        />
        <Story />
        <div
          aria-hidden
          className="h-5 bg-linear-to-b from-navy-soft to-navy-deep"
        />
        <Menu />
        <div
          aria-hidden
          className="h-5 bg-linear-to-b from-navy-deep to-navy-soft"
        />
        <Gallery />
        <div
          aria-hidden
          className="h-5 bg-linear-to-b from-navy-soft to-navy-deep"
        />
        <Location />
      </main>
      <Footer />
    </>
  );
}
