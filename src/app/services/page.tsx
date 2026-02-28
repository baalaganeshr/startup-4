"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { services } from "@/data/services";

/* ═══════════════════════════════════════════════════════════
   SERVICE ACCORDION ITEM
   ═══════════════════════════════════════════════════════════ */
function ServiceAccordion({
  service,
  isOpen,
  onToggle,
  index,
}: {
  service: (typeof services)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      className="group border-b border-mauve/10"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <button
        className="flex w-full items-center justify-between py-8 text-left transition-colors duration-300 hover:bg-shadow/10 px-4 md:px-8 rounded-xl"
        onClick={onToggle}
        data-cursor-hover
      >
        <div className="flex items-center gap-6 md:gap-10">
          {/* Number */}
          <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-plum/40 md:text-3xl">
            {service.number}
          </span>

          {/* Title */}
          <h3 className="font-[family-name:var(--font-sub)] text-xl font-bold uppercase tracking-wider text-blush md:text-2xl lg:text-3xl">
            {service.title}
          </h3>
        </div>

        {/* Toggle Icon */}
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-full border border-mauve/20"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="h-5 w-5 text-blush" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-8 px-4 pb-10 md:grid-cols-2 md:px-8">
              {/* Description */}
              <div>
                <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-mauve/80">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <span className="mb-4 block font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.3em] text-plum">
                  Capabilities
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="h-1 w-1 rounded-full bg-plum" />
                      <span className="font-[family-name:var(--font-body)] text-sm text-blush/70">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROCESS SECTION
   ═══════════════════════════════════════════════════════════ */
const process = [
  { step: "01", title: "Discover", description: "Deep research into your brand, audience, and goals. We uncover insights that inform every decision." },
  { step: "02", title: "Define", description: "Strategic clarity. We define the creative direction, scope, and success metrics before any design work begins." },
  { step: "03", title: "Design", description: "Where ideas take shape. Iterative design sprints with real-time collaboration and feedback loops." },
  { step: "04", title: "Develop", description: "Pixel-perfect implementation with cutting-edge technology. Performance is not negotiable." },
  { step: "05", title: "Deliver", description: "Launch with confidence. Thorough QA, deployment, and post-launch optimization." },
];

function ProcessSection() {
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
            Our Process
          </motion.span>
          <TextReveal
            as="h2"
            className="font-[family-name:var(--font-heading)] fluid-sub font-bold uppercase text-blush"
            splitBy="word"
            staggerDelay={0.06}
          >
            How we bring ideas to life
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.15 + i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard className="h-full p-6">
                <span className="mb-3 block font-[family-name:var(--font-display)] text-3xl font-bold text-plum/30">
                  {item.step}
                </span>
                <h3 className="mb-3 font-[family-name:var(--font-sub)] text-lg font-bold uppercase tracking-wider text-blush">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-xs leading-relaxed text-mauve/70">
                  {item.description}
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
   SERVICES PAGE
   ═══════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center px-6 pt-32 pb-20 lg:px-12">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(109, 60, 82, 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.span
            className="mb-6 inline-block font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.5em] text-plum"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our Services
          </motion.span>
          <TextReveal
            as="h1"
            className="font-[family-name:var(--font-display)] fluid-heading font-bold uppercase text-blush"
            splitBy="word"
            staggerDelay={0.06}
            delay={0.5}
          >
            Crafting digital excellence
          </TextReveal>
          <motion.p
            className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-mauve/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            From brand strategy to immersive web experiences, we offer a full
            spectrum of creative services designed to elevate your digital presence.
          </motion.p>
        </div>
      </section>

      {/* Accordion Services */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          {services.map((service, i) => (
            <ServiceAccordion
              key={service.id}
              service={service}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      {/* CTA */}
      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <TextReveal
            as="h2"
            className="font-[family-name:var(--font-heading)] fluid-sub font-bold uppercase text-blush"
            splitBy="word"
            staggerDelay={0.06}
          >
            Have a project in mind?
          </TextReveal>
          <motion.p
            className="mx-auto mt-6 max-w-lg font-[family-name:var(--font-body)] text-base text-mauve/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Let&apos;s talk about how we can bring your vision to life.
          </motion.p>
          <div className="mt-10">
            <MagneticButton variant="primary" size="lg" href="/contact">
              Get in Touch
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
