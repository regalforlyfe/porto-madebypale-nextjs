"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { BackgroundParallax, Career, Intro, Project } from "./_components";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <Career />
      <BackgroundParallax />
      <Project />
    </main>
  );
}
