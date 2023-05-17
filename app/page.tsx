"use client";

import { useEffect, useState } from "react";
import AfterHero from "./components/AfterHero";
import ArRum from "./components/ArRum";
import Hero from "./components/Hero";
import People from "./components/People";

export default function Home() {
  const [currentOverflow, setCurrentOverflow] = useState("hidden");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = currentOverflow;
  }, [currentOverflow]);

  return (
    <main className="max-w-[28.125rem] mx-auto">
      <Hero setCurrentOverflow={setCurrentOverflow} />
      <AfterHero />
      <ArRum />
      <People />
    </main>
  );
}
