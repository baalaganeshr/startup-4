"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Trailing tail configs - progressively slower/laggier
  const tail1Config = { damping: 35, stiffness: 400, mass: 0.2 };
  const tail2Config = { damping: 30, stiffness: 300, mass: 0.3 };
  const tail3Config = { damping: 25, stiffness: 200, mass: 0.4 };
  const tail4Config = { damping: 20, stiffness: 150, mass: 0.5 };
  const tail5Config = { damping: 15, stiffness: 100, mass: 0.6 };

  const tail1X = useSpring(cursorX, tail1Config);
  const tail1Y = useSpring(cursorY, tail1Config);
  const tail2X = useSpring(cursorX, tail2Config);
  const tail2Y = useSpring(cursorY, tail2Config);
  const tail3X = useSpring(cursorX, tail3Config);
  const tail3Y = useSpring(cursorY, tail3Config);
  const tail4X = useSpring(cursorX, tail4Config);
  const tail4Y = useSpring(cursorY, tail4Config);
  const tail5X = useSpring(cursorX, tail5Config);
  const tail5Y = useSpring(cursorY, tail5Config);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsHidden(false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          'a, button, [role="button"], input, textarea, select, [data-magnetic], [data-cursor-hover]'
        )
      ) {
        setIsHovering(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (
        !related?.closest(
          'a, button, [role="button"], input, textarea, select, [data-magnetic], [data-cursor-hover]'
        )
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  const tailDots = [
    { x: tail5X, y: tail5Y, size: 3, opacity: 0.15 },
    { x: tail4X, y: tail4Y, size: 4, opacity: 0.25 },
    { x: tail3X, y: tail3Y, size: 5, opacity: 0.35 },
    { x: tail2X, y: tail2Y, size: 6, opacity: 0.5 },
    { x: tail1X, y: tail1Y, size: 7, opacity: 0.7 },
  ];

  return (
    <>
      {/* Trailing tail dots - white dots that follow behind the normal cursor */}
      {tailDots.map((dot, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed top-0 left-0 z-[9990] rounded-full bg-white"
          style={{
            x: dot.x,
            y: dot.y,
            translateX: "-50%",
            translateY: "-50%",
            width: isHovering ? dot.size * 1.5 : isClicking ? dot.size * 0.8 : dot.size,
            height: isHovering ? dot.size * 1.5 : isClicking ? dot.size * 0.8 : dot.size,
          }}
          animate={{
            opacity: isHidden ? 0 : isHovering ? dot.opacity * 1.2 : dot.opacity,
            scale: isClicking ? 0.8 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      ))}

      {/* Hover ring - appears on interactive elements */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-white/40"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 40 : 10,
          height: isHovering ? 40 : 10,
          opacity: isHidden ? 0 : isHovering ? 0.6 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
    </>
  );
}
