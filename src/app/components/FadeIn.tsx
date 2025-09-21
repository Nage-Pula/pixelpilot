'use client';
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function FadeIn({ children, delay=0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.4, 0.3, 0.2, 0.9] }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}