"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useCursorPosition() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.3 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return { x: smoothX, y: smoothY, rawX: x, rawY: y };
}
