"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, select");
      setIsHoveringLink(!!interactive);
    };

    handleResize(); // check on load
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white z-[9999] pointer-events-none transition-opacity duration-300"
      animate={{
        x: position.x - 6,
        y: position.y - 6,
        opacity: isHoveringLink ? 0 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
}
