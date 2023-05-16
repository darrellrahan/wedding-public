"use client";

import { useEffect, useState } from "react";
import AfterHero from "./components/AfterHero";
import Hero from "./components/Hero";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <main className="max-w-[28.125rem] mx-auto">
      <Hero />
      <AfterHero />
    </main>
  );
}
