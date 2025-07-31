"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const transition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
  mass: 0.5,
};

const cursorStyle: "neon" | "emoji" | "image" = "neon"; // 🔧 Change this

export default function CursorEffect() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    const move = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, select");
      setIsInteractive(!!interactive);
    };

    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setRipples((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  if (isMobile) return null; // ✅ Fallback for mobile

  // 🔮 Style presets
  const mainStyle =
    cursorStyle === "neon"
      ? "bg-purple-500"
      : cursorStyle === "emoji"
      ? "text-xl"
      : "bg-transparent";
  const trailStyle =
    cursorStyle === "neon" ? "bg-purple-300" : cursorStyle === "emoji" ? "hidden" : "bg-transparent";

  return (
    <>
      {/* 1️⃣ Main Cursor */}
      <motion.div
        className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] flex items-center justify-center [will-change:transform,opacity] ${mainStyle}`}
        animate={{
          x: cursorPos.x - 8,
          y: cursorPos.y - 8,
          opacity: isInteractive ? 0 : 1,
        }}
        transition={{
          ...transition,
          opacity: { duration: 0.25 },
        }}
      >
        {cursorStyle === "emoji" && "👆"}
        {cursorStyle === "image" && (
          <img
            src="/cursor.png"
            alt="cursor"
            className="w-6 h-6 object-contain pointer-events-none"
          />
        )}
      </motion.div>

      {/* 2️⃣ Trailing Dot Animation */}
      <motion.div
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9998] [will-change:transform,opacity] ${trailStyle}`}
        animate={{
          x: cursorPos.x + 10,
          y: cursorPos.y + 10,
          opacity: isInteractive ? 0 : 0.8,
        }}
        transition={{
          ...transition,
          damping: 40,
          stiffness: 200,
          opacity: { duration: 0.3 },
        }}
      />

      {cursorStyle === "neon" && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9997] border border-purple-400 shadow-[0_0_20px_6px_rgba(168,85,247,0.5)] [will-change:transform,opacity]"
          animate={{
            x: cursorPos.x - 32,
            y: cursorPos.y - 32,
            opacity: isInteractive ? 0 : 0.9,
          }}
          transition={{
            ...transition,
            damping: 20,
            stiffness: 200,
            opacity: { duration: 0.25 },
          }}
        />
      )}

      {/* 4️⃣ Click Ripple */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed w-8 h-8 rounded-full border-2 border-purple-400 pointer-events-none z-[9996]"
            initial={{
              x: ripple.x - 16,
              y: ripple.y - 16,
              scale: 0,
              opacity: 0.8,
            }}
            animate={{
              scale: 3,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, type: "tween", ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
