"use client";

import { Marquee } from "@/components/ui/marquee";

const words = [
  "DESIGN",
  "DEVELOP",
  "DELIVER",
  "INNOVATE",
  "CREATE",
  "TRANSFORM",
  "INSPIRE",
  "ELEVATE",
];

export function MarqueeSection() {
  return (
    <section className="relative overflow-hidden border-y border-mauve/10 py-8">
      <Marquee speed={25} direction="left">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-8 font-[family-name:var(--font-heading)] text-4xl font-bold uppercase tracking-[0.15em] text-mauve/20 md:text-5xl lg:text-6xl"
          >
            {word}
            <span className="text-plum/30">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
