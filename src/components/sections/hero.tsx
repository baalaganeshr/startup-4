"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/ui/text-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-void via-burgundy/20 to-void" />
  ),
});

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/30 via-transparent to-void/30" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        {/* Tag */}
        <motion.div
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-mauve/20 bg-shadow/30 px-5 py-2 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-plum" />
          <span className="font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.3em] text-mauve">
            Creative Agency — Est. 2024
          </span>
        </motion.div>

        {/* Main Heading */}
        <TextReveal
          as="h1"
          className="font-[family-name:var(--font-display)] fluid-display font-bold uppercase text-blush"
          splitBy="char"
          staggerDelay={0.03}
          delay={0.4}
          duration={0.9}
        >
          NEXUS
        </TextReveal>

        {/* Subheading */}
        <TextReveal
          as="p"
          className="mt-4 font-[family-name:var(--font-heading)] text-lg tracking-[0.4em] uppercase text-mauve sm:text-xl md:text-2xl"
          splitBy="word"
          staggerDelay={0.08}
          delay={0.8}
        >
          Design Beyond Boundaries
        </TextReveal>

        {/* Description */}
        <motion.p
          className="mt-8 max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-mauve/80 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          We craft extraordinary digital experiences at the intersection of
          design, technology, and imagination. Every pixel tells a story.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton variant="primary" size="lg" href="/work">
            View Our Work
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </MagneticButton>
          <MagneticButton variant="outline" size="lg" href="/contact">
            Start a Project
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.4em] text-mauve/50">
          Scroll
        </span>
        <motion.div
          className="h-12 w-[1px] bg-gradient-to-b from-mauve/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
