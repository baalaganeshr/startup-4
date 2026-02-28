"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  onClick,
  strength = 0.35,
}: MagneticButtonProps) {
  const { ref, style, handlers } = useMagnetic(strength);

  const baseStyles =
    "relative inline-flex items-center justify-center font-[family-name:var(--font-sub)] font-semibold tracking-wide uppercase transition-all duration-500 overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-plum to-burgundy text-blush border border-plum/30 hover:border-blush/20 glow-plum hover:glow-blush",
    secondary:
      "glass text-blush hover:bg-plum/20 border-mauve/20 hover:border-blush/20",
    ghost:
      "bg-transparent text-blush hover:text-blush border border-transparent hover:border-mauve/20",
    outline:
      "bg-transparent text-blush border border-mauve/30 hover:border-blush/30 hover:bg-blush/5",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs rounded-full gap-2",
    md: "px-8 py-3.5 text-sm rounded-full gap-3",
    lg: "px-12 py-5 text-base rounded-full gap-4",
  };

  const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blush/10 to-plum/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-blush/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
        aria-hidden
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    
    if (isExternal) {
      return (
        <motion.div
          ref={ref}
          style={style}
          {...handlers}
          data-magnetic
        >
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClass}
            whileTap={{ scale: 0.97 }}
          >
            {content}
          </motion.a>
        </motion.div>
      );
    }

    return (
      <motion.div
        ref={ref}
        style={style}
        {...handlers}
        data-magnetic
      >
        <Link href={href} className={combinedClass}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={style}
      {...handlers}
      data-magnetic
    >
      <motion.button
        className={combinedClass}
        onClick={onClick}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.button>
    </motion.div>
  );
}
