"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TextReveal } from "@/components/ui/text-reveal";

const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Awards Won", value: 24, suffix: "" },
  { label: "Team Members", value: 12, suffix: "" },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-32 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-burgundy/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20 text-center">
          <TextReveal
            as="h2"
            className="font-[family-name:var(--font-heading)] fluid-sub font-bold uppercase tracking-wider text-mauve"
            splitBy="word"
            staggerDelay={0.06}
          >
            Numbers that matter
          </TextReveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                className="font-[family-name:var(--font-display)] text-5xl font-bold text-blush md:text-6xl lg:text-7xl"
                duration={2.5}
              />
              <span className="mt-4 block font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.3em] text-mauve/60">
                {stat.label}
              </span>

              {/* Decorative line */}
              <motion.div
                className="mt-6 h-[1px] w-12 bg-gradient-to-r from-transparent via-plum/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
