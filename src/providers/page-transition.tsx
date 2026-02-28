"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      filter: { duration: 0.4 },
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
    },
  },
};

const overlayVariants = {
  initial: { scaleY: 1 },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
      delay: 0.1,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
    },
  },
};

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Page Overlay Curtain */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-50 origin-top bg-burgundy"
          variants={overlayVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        />

        {/* Page Content */}
        <motion.main
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
}
