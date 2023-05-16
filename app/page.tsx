"use client";

import { useEffect, useState } from "react";
import AfterHero from "./components/AfterHero";
import Hero from "./components/Hero";

export default function Home() {
  const [currentOverflow, setCurrentOverflow] = useState("hidden");

  useEffect(() => {
    document.body.style.overflow = currentOverflow;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentOverflow]);

  return (
    <main className="max-w-[28.125rem] mx-auto">
      <Hero setCurrentOverflow={setCurrentOverflow} />
      <AfterHero />
    </main>
  );
}
