"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  const { ref, style, handlers } = useMagnetic(0.2);

  return (
    <motion.div ref={ref} style={style} {...handlers} data-magnetic>
      <Link
        href={href}
        className={cn(
          "relative px-4 py-2 text-sm font-[family-name:var(--font-sub)] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
          isActive ? "text-blush" : "text-mauve hover:text-blush"
        )}
      >
        {label}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-plum"
            layoutId="activeNav"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          />
        )}
      </Link>
    </motion.div>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-void/98 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "font-[family-name:var(--font-display)] text-4xl uppercase tracking-wider transition-colors duration-300 sm:text-5xl",
                    pathname === link.href ? "text-blush" : "text-mauve hover:text-blush"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-700 lg:px-12",
          scrolled ? "glass-strong py-3" : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[0.15em] text-blush transition-opacity hover:opacity-80"
        >
          NEXUS<span className="text-plum">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
            />
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="glass rounded-full px-6 py-2.5 font-[family-name:var(--font-sub)] text-xs font-semibold uppercase tracking-[0.2em] text-blush transition-all duration-300 hover:bg-plum/20 hover:border-blush/20"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            className="block h-[1.5px] w-6 bg-blush"
            animate={{
              rotate: mobileOpen ? 45 : 0,
              y: mobileOpen ? 4.5 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-blush"
            animate={{
              opacity: mobileOpen ? 0 : 1,
              x: mobileOpen ? 20 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-blush"
            animate={{
              rotate: mobileOpen ? -45 : 0,
              y: mobileOpen ? -4.5 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
