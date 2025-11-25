"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center p-4">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
          }}
          className="w-2 h-2 rounded-full bg-cyan-400"
        />
      ))}
    </div>
  );
}
