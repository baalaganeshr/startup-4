"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface UseParallaxOptions {
  offset?: number;
  startOffset?: string;
  endOffset?: string;
}

export function useParallax(options: UseParallaxOptions = {}): {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  progress: MotionValue<number>;
} {
  const { offset = 100 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return { ref, y, opacity, progress: scrollYProgress };
}
