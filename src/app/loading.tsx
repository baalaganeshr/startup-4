"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-void">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(109, 60, 82, 0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo Mark */}
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wider text-blush"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            NEXUS
          </motion.span>
          <motion.span
            className="font-[family-name:var(--font-display)] text-4xl font-bold text-plum"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Loading bar */}
        <div className="h-[1px] w-48 overflow-hidden bg-mauve/15">
          <motion.div
            className="h-full bg-gradient-to-r from-plum to-blush"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              ease: [0.65, 0, 0.35, 1],
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
          />
        </div>

        {/* Loading text */}
        <motion.span
          className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.5em] text-mauve/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Loading
        </motion.span>
      </div>
    </div>
  );
}
