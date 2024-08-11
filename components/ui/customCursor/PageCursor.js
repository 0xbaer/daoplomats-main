"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from "react";

const PageCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 30 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor"
      style={{
        left: x,
        top: y,
      }}
    >
      <div className="w-5 h-5 bg-primary"></div>
    </motion.div>
  );
};

export default PageCursor;
