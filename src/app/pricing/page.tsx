"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { pricing } from "@/data/pricing";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center px-6 pt-32 pb-12 lg:px-12">
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
            Pricing
          </motion.span>
          <TextReveal
            as="h1"
            className="font-[family-name:var(--font-display)] fluid-heading font-bold uppercase text-blush"
            splitBy="word"
            staggerDelay={0.06}
            delay={0.5}
          >
            Investment in excellence
          </TextReveal>
          <motion.p
            className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-mauve/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Transparent pricing for extraordinary work. Choose the package that
            fits your ambition, or contact us for a custom solution.
          </motion.p>

          {/* Toggle */}
          <motion.div
            className="mt-10 inline-flex items-center gap-4 rounded-full border border-mauve/15 bg-shadow/30 px-2 py-2 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button
              className={cn(
                "rounded-full px-5 py-2 font-[family-name:var(--font-sub)] text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300",
                !isAnnual
                  ? "bg-plum/30 text-blush"
                  : "text-mauve hover:text-blush"
              )}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={cn(
                "rounded-full px-5 py-2 font-[family-name:var(--font-sub)] text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300",
                isAnnual
                  ? "bg-plum/30 text-blush"
                  : "text-mauve hover:text-blush"
              )}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <span className="ml-2 text-[10px] text-plum">Save 20%</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={ref} className="px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard
                className={cn(
                  "relative h-full p-8 md:p-10",
                  tier.featured && "border-plum/30 glow-plum"
                )}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-plum to-burgundy px-4 py-1 font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.2em] text-blush">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier Name */}
                <h3 className="font-[family-name:var(--font-sub)] text-lg font-bold uppercase tracking-[0.2em] text-plum">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-accent)] text-sm text-mauve/60">
                    $
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-blush md:text-6xl">
                    {(isAnnual ? tier.price.annual : tier.price.monthly).toLocaleString()}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-mauve/70">
                  {tier.description}
                </p>

                {/* Divider */}
                <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-mauve/15 to-transparent" />

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, fi) => (
                    <motion.li
                      key={feature}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + fi * 0.04, duration: 0.4 }}
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-plum"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-[family-name:var(--font-body)] text-sm text-blush/70">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10">
                  <MagneticButton
                    variant={tier.featured ? "primary" : "outline"}
                    size="md"
                    href="/contact"
                    className="w-full"
                  >
                    {tier.cta}
                  </MagneticButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ / Trust */}
      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <TextReveal
            as="h2"
            className="font-[family-name:var(--font-heading)] fluid-sub font-bold uppercase text-blush"
            splitBy="word"
            staggerDelay={0.06}
          >
            Need something custom?
          </TextReveal>
          <motion.p
            className="mx-auto mt-6 max-w-lg font-[family-name:var(--font-body)] text-base text-mauve/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Every project is unique. If our packages don&apos;t quite fit your needs,
            let&apos;s design a custom engagement that&apos;s perfect for your goals.
          </motion.p>
          <div className="mt-10">
            <MagneticButton variant="secondary" size="lg" href="/contact">
              Let&apos;s Talk Custom
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
