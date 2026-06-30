"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const links = [
    { label: "Email", value: "sharunshettys@gmail.com", href: "mailto:sharunshettys@gmail.com" },
    { label: "Phone", value: "+91 85469 55644", href: "tel:+918546955644" },
    { label: "Location", value: "Bengaluru, India", href: null },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-foreground text-background py-24 sm:py-32"
    >
      <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="eyebrow text-primary">05</span>
          <span className="h-px w-8 bg-background/30" />
          <span className="eyebrow text-background/60">Let&apos;s Connect</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="font-heading font-medium text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] tracking-[-0.04em] max-w-4xl"
        >
          Building a GTM motion from{" "}
          <span className="text-primary">scratch?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-8 text-lg text-background/70 max-w-xl"
        >
          Looking for a marketing leader who builds the system, not just the
          campaign. Open to senior marketing roles with real ownership.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-px mt-16 border-t border-background/20">
          {links.map((link, i) => {
            const content = (
              <>
                <span className="eyebrow text-background/50">{link.label}</span>
                <span className="mt-2 flex items-center gap-1.5 text-lg">
                  {link.value}
                  {link.href && (
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  )}
                </span>
              </>
            );
            return link.href ? (
              <motion.a
                key={i}
                href={link.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group flex flex-col py-8 sm:px-2 border-b sm:border-b-0 border-background/20 hover:text-primary transition-colors"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group flex flex-col py-8 sm:px-2 border-b sm:border-b-0 border-background/20"
              >
                {content}
              </motion.div>
            );
          })}
        </div>

        <div className="border-t border-background/20 pt-8 mt-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <span>© 2026 Sharun Shetty</span>
          <span className="font-heading">Director of Marketing</span>
        </div>
      </div>
    </footer>
  );
}
