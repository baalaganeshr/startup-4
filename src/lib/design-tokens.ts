/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS — Animation Presets for Framer Motion
   ═══════════════════════════════════════════════════════════ */

export const easings = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
  inOutCubic: [0.65, 0, 0.35, 1] as const,
  outBack: [0.34, 1.56, 0.64, 1] as const,
  inOutQuint: [0.83, 0, 0.17, 1] as const,
};

export const spring = {
  smooth: { type: "spring" as const, damping: 30, stiffness: 300, mass: 0.5 },
  snappy: { type: "spring" as const, damping: 25, stiffness: 400, mass: 0.3 },
  bouncy: { type: "spring" as const, damping: 15, stiffness: 300, mass: 0.5 },
  gentle: { type: "spring" as const, damping: 40, stiffness: 200, mass: 1 },
  magnetic: { type: "spring" as const, damping: 15, stiffness: 150, mass: 0.1 },
};

export const duration = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  verySlow: 1.2,
  heroReveal: 1.5,
};

export const stagger = {
  fast: 0.03,
  normal: 0.05,
  slow: 0.08,
  verySlow: 0.12,
};

/* ═══════════════════════════════════════════════════════════
   ANIMATION VARIANTS — Reusable Motion Presets
   ═══════════════════════════════════════════════════════════ */

export const fadeUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export const slideInRight = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 },
};

export const revealUp = {
  initial: { y: "100%" },
  animate: { y: "0%" },
  exit: { y: "-100%" },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easings.outExpo,
    },
  },
};

/* ═══════════════════════════════════════════════════════════
   COLOR TOKENS (for JS usage / Three.js)
   ═══════════════════════════════════════════════════════════ */

export const colors = {
  mauve: "#765D67",
  plum: "#6D3C52",
  burgundy: "#4B2138",
  void: "#1B0C1A",
  shadow: "#2D222F",
  blush: "#FADCD5",
};
