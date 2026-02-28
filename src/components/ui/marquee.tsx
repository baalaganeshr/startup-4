"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative flex overflow-hidden",
        pauseOnHover && "[&:hover_>_div]:animation-play-state-paused",
        className
      )}
    >
      <motion.div
        className="flex shrink-0 items-center gap-8"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop" as const,
            duration: speed,
            ease: "linear" as const,
          },
        }}
        style={{ willChange: "transform" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
