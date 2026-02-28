"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-40 lg:px-12"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109, 60, 82, 0.3) 0%, rgba(75, 33, 56, 0.1) 40%, transparent 70%)",
        }}
      />

      {/* Decorative lines */}
      <motion.div
        className="pointer-events-none absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-mauve/10 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Label */}
        <motion.span
          className="mb-6 inline-block font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.4em] text-plum"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Ready to begin?
        </motion.span>

        {/* Heading */}
        <TextReveal
          as="h2"
          className="font-[family-name:var(--font-display)] fluid-heading font-bold uppercase text-blush"
          splitBy="word"
          staggerDelay={0.07}
          duration={0.9}
        >
          Let&apos;s create something extraordinary
        </TextReveal>

        {/* Description */}
        <motion.p
          className="mx-auto mt-8 max-w-lg font-[family-name:var(--font-body)] text-base leading-relaxed text-mauve/70 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Transform your vision into a digital masterpiece. We&apos;re ready to
          push boundaries and redefine what&apos;s possible.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <MagneticButton variant="primary" size="lg" href="/contact">
            Start Your Project
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
