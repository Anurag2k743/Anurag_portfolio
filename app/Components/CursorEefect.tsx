"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const transition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
  mass: 0.5,
};

export default function CursorEffect() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-purple-400 pointer-events-none z-[9999]"
        animate={{
          x: cursorPos.x - 5,
          y: cursorPos.y - 5,
        }}
        transition={transition}
      />

      {/* Trailing Small Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-purple-300 pointer-events-none z-[9998]"
        animate={{
          x: cursorPos.x + 10,
          y: cursorPos.y + 6,
        }}
        transition={{ ...transition, damping: 40, stiffness: 200 }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-1 rounded-full border border-purple-400 pointer-events-none z-[9997] shadow-[0_0_20px_4px_rgba(168,85,247,0.4)]"
        animate={{
          x: cursorPos.x - 24,
          y: cursorPos.y - 24,
        }}
        transition={{ ...transition, damping: 30, stiffness: 250 }}
      />
    </>
  );
}
