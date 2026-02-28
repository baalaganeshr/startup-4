"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { team, values } from "@/data/team";

/* ═══════════════════════════════════════════════════════════
   MANIFESTO SECTION
   ═══════════════════════════════════════════════════════════ */
function ManifestoSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20 lg:px-12">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(109, 60, 82, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.span
          className="mb-8 inline-block font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.5em] text-plum"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our Story
        </motion.span>

        <TextReveal
          as="h1"
          className="font-[family-name:var(--font-display)] fluid-heading font-bold uppercase text-blush"
          splitBy="word"
          staggerDelay={0.06}
          delay={0.5}
          duration={0.9}
        >
          We believe design is the most powerful force for change
        </TextReveal>

        <motion.p
          className="mx-auto mt-12 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-mauve/80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Founded in 2024, NEXUS was born from a simple conviction: the digital
          experiences people interact with every day deserve to be extraordinary.
          We&apos;re not just designers and developers — we&apos;re architects of
          emotion, engineers of delight, and relentless perfectionists who
          believe that every pixel matters.
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   VALUES SECTION
   ═══════════════════════════════════════════════════════════ */
function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <motion.span
            className="mb-4 block font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.4em] text-plum"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.span>
          <TextReveal
            as="h2"
            className="font-[family-name:var(--font-heading)] fluid-sub font-bold uppercase text-blush"
            splitBy="word"
            staggerDelay={0.06}
          >
            What drives us forward
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard className="h-full p-8">
                <span className="mb-4 block font-[family-name:var(--font-display)] text-2xl font-bold text-plum/50">
                  0{i + 1}
                </span>
                <h3 className="mb-3 font-[family-name:var(--font-sub)] text-lg font-bold uppercase tracking-wider text-blush">
                  {value.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-mauve/70">
                  {value.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   TEAM SECTION
   ═══════════════════════════════════════════════════════════ */
function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="relative px-6 py-32 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-burgundy/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16">
          <motion.span
            className="mb-4 block font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.4em] text-plum"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            The Collective
          </motion.span>
          <TextReveal
            as="h2"
            className="font-[family-name:var(--font-heading)] fluid-sub font-bold uppercase text-blush"
            splitBy="word"
            staggerDelay={0.06}
          >
            Meet the minds behind the magic
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              className="group"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-shadow/50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-100 saturate-[0.7]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/20 to-transparent" />

                {/* Info overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-[family-name:var(--font-body)] text-xs leading-relaxed text-blush/80">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Name & Role */}
              <div className="mt-5">
                <h3 className="font-[family-name:var(--font-sub)] text-lg font-bold uppercase tracking-wider text-blush">
                  {member.name}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.2em] text-plum">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   TIMELINE SECTION
   ═══════════════════════════════════════════════════════════ */
const timeline = [
  { year: "2024", title: "Founded", description: "NEXUS was born in a garage studio with 3 obsessive designers and a shared vision." },
  { year: "2024", title: "First Awwwards", description: "Our debut project earned Site of the Day, putting us on the global creative map." },
  { year: "2025", title: "Team of 12", description: "Scaled to a diverse collective of designers, engineers, animators, and strategists." },
  { year: "2025", title: "100+ Projects", description: "Crossed the century mark with clients spanning 4 continents and 15 industries." },
  { year: "2026", title: "Studio Expansion", description: "Opened our second studio, pushing into immersive 3D, AR, and AI-powered creative tools." },
];

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <TextReveal
            as="h2"
            className="font-[family-name:var(--font-heading)] fluid-sub font-bold uppercase text-blush"
            splitBy="word"
            staggerDelay={0.06}
          >
            Our Journey
          </TextReveal>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-plum/50 via-mauve/20 to-transparent md:left-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
          />

          {timeline.map((item, i) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              className={`relative mb-12 flex items-start gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Dot */}
              <div className="absolute left-8 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-plum bg-void md:left-1/2" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-plum">
                  {item.year}
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-sub)] text-xl font-bold uppercase tracking-wider text-blush">
                  {item.title}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-mauve/70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <ManifestoSection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
    </>
  );
}
