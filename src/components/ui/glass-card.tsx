"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  glowColor?: string;
  hover3D?: boolean;
}

export function GlassCard({
  children,
  className,
  tiltIntensity = 10,
  glowColor = "rgba(250, 220, 213, 0.08)",
  hover3D = true,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltIntensity, -tiltIntensity]), {
    damping: 20,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltIntensity, tiltIntensity]), {
    damping: 20,
    stiffness: 200,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !hover3D) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "glass noise relative overflow-hidden rounded-2xl p-6 transition-colors duration-500",
        "hover:border-blush/15",
        className
      )}
      style={{
        perspective: 1000,
        rotateX: hover3D ? rotateX : 0,
        rotateY: hover3D ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient highlight following cursor */}
      {hover3D && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, ${glowColor}, transparent 40%)`,
          }}
          aria-hidden
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
