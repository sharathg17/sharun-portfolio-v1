"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const stats = [
    { value: "3", label: "Startups scaled from zero" },
    { value: "30%", label: "Lift in sales lead funnel" },
    { value: "35%", label: "Conversion gain" },
    { value: "500+", label: "Community in 6 months" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="absolute inset-0 dotted-bg" />
      <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-[10%] w-4 h-4 bg-primary/60 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-[15%] w-3 h-3 bg-primary/50 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-[20%] w-6 h-6 bg-primary/40 rounded-full blur-md"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-2 w-2"
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="eyebrow text-muted-foreground"
          >
            GTM and Positioning
          </motion.span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-heading font-medium text-foreground text-[clamp(2.75rem,7vw,6rem)] leading-[1.02] tracking-[-0.04em]">
              {"Every campaign is one cell in a larger "
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: "0.4em" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.04, ease }}
                    className="inline-block mr-[0.22em]"
                  >
                    {word}
                  </motion.span>
                ))}
              <motion.span
                initial={{ opacity: 0, y: "0.4em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease }}
                className="inline-block gradient-text"
              >
                system.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="lg:col-span-4 lg:pb-3"
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I&apos;m Sharun Shetty. For 10+ years I&apos;ve built GTM functions
              from zero across four B2B startups — strategy, messaging,
              campaigns, and pipeline designed to interlock.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-white font-semibold text-sm px-6 py-3 hover:opacity-90 transition-opacity"
              >
                See the work
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </MagneticButton>
              <MagneticButton
                href="mailto:sharunshettys@gmail.com"
                className="btn-geo inline-flex items-center font-semibold text-sm px-6 py-3"
              >
                Get in touch
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 sm:mt-28 border-t border-border pt-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease }}
              className="text-center"
            >
              <div className="index-num text-5xl sm:text-6xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed max-w-[140px] mx-auto">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
