"use client";

import { useRef, useCallback, type MouseEvent as ReactMouseEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { spring as springConfigs } from "@/lib/design-tokens";

export function useMagnetic(strength: number = 0.35) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfigs.magnetic);
  const springY = useSpring(y, springConfigs.magnetic);

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * strength);
      y.set((e.clientY - centerY) * strength);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    ref,
    style: { x: springX, y: springY },
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}
