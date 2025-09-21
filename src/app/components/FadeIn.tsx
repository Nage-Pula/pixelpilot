'use client';
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({children, delay=0}: {children: ReactNode, delay?: number  }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  );
}