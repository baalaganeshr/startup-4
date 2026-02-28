"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
  delay?: number;
  once?: boolean;
}

const animations: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
};

export function SectionWrapper({
  children,
  className,
  id,
  animation = "fadeUp",
  delay = 0,
  once = true,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-15% 0px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn("relative", className)}
      variants={animations[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.section>
  );
}
