"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  index: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  index,
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 ${className}`}
    >
      <span className="eyebrow text-primary">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span className="eyebrow text-muted-foreground">{children}</span>
    </motion.div>
  );
}
