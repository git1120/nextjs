"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeInSection({
  children,
  delay = 0,
}: Readonly<{
  children: ReactNode;
  delay?: number;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
