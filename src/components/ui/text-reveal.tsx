"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "char" | "word" | "line";
  staggerDelay?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  animation?: "slideUp" | "fadeIn" | "slideLeft" | "clipReveal";
}

export function TextReveal({
  children,
  className,
  as: Tag = "p",
  splitBy = "word",
  staggerDelay = 0.03,
  duration = 0.7,
  delay = 0,
  once = true,
  animation = "slideUp",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const splitText = () => {
    if (splitBy === "char") {
      return children.split("").map((char, i) => ({
        text: char === " " ? "\u00A0" : char,
        key: `${char}-${i}`,
      }));
    }
    if (splitBy === "word") {
      return children.split(" ").map((word, i) => ({
        text: word,
        key: `${word}-${i}`,
      }));
    }
    // line — split by newline
    return children.split("\n").map((line, i) => ({
      text: line,
      key: `${line}-${i}`,
    }));
  };

  const items = splitText();

  const animations = {
    slideUp: {
      hidden: { y: "110%", opacity: 0, rotateX: -40 },
      visible: { y: "0%", opacity: 1, rotateX: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0, filter: "blur(8px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
    slideLeft: {
      hidden: { x: 40, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    clipReveal: {
      hidden: { clipPath: "inset(100% 0% 0% 0%)" },
      visible: { clipPath: "inset(0% 0% 0% 0%)" },
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={cn("overflow-hidden", className)}>
      {items.map((item, i) => (
        <span
          key={item.key}
          className={cn(
            "inline-block overflow-hidden",
            splitBy === "word" && "mr-[0.25em]",
            splitBy === "line" && "block"
          )}
          style={{ perspective: "600px" }}
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={selectedAnimation.hidden}
            animate={isInView ? selectedAnimation.visible : selectedAnimation.hidden}
            transition={{
              duration,
              delay: delay + i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.text}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
