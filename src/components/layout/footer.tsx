"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "Twitter / X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer
      ref={containerRef}
      className="relative overflow-hidden border-t border-mauve/10 bg-void"
    >
      {/* Large CTA Text */}
      <motion.div style={{ y, opacity }} className="px-6 pt-32 pb-20 lg:px-12">
        <TextReveal
          as="h2"
          className="font-[family-name:var(--font-heading)] fluid-heading text-center text-blush"
          splitBy="word"
          staggerDelay={0.06}
        >
          Let&apos;s create something extraordinary together
        </TextReveal>

        <div className="mt-12 flex justify-center">
          <MagneticButton variant="primary" size="lg" href="/contact">
            Start a Project
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
        </div>
      </motion.div>

      {/* Footer Grid */}
      <div className="border-t border-mauve/10 px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.15em] text-blush"
            >
              NEXUS<span className="text-plum">.</span>
            </Link>
            <p className="mt-4 max-w-xs font-[family-name:var(--font-body)] text-sm leading-relaxed text-mauve">
              A design-first creative agency crafting digital experiences that
              transcend the ordinary. Based everywhere, creating for everyone.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.3em] text-mauve">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-sub)] text-sm text-blush/70 transition-colors duration-300 hover:text-blush"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-[family-name:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.3em] text-mauve">
              Connect
            </h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-sub)] text-sm text-blush/70 transition-colors duration-300 hover:text-blush"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-mauve/10 px-6 py-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-[family-name:var(--font-accent)] text-xs tracking-wider text-mauve/60">
            &copy; {new Date().getFullYear()} NEXUS. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-accent)] text-xs tracking-wider text-mauve/60">
            Designed & Built with obsessive attention to detail
          </p>
        </div>
      </div>

      {/* Background gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(109, 60, 82, 0.4) 0%, rgba(75, 33, 56, 0.2) 50%, transparent 70%)",
        }}
      />
    </footer>
  );
}
