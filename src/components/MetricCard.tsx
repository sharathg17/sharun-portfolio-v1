"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Rocket, Target, Zap, Award } from "lucide-react";

interface MetricCardProps {
  icon: "trending" | "users" | "rocket" | "target" | "zap" | "award";
  value: string;
  label: string;
  delay?: number;
}

const iconMap = {
  trending: TrendingUp,
  users: Users,
  rocket: Rocket,
  target: Target,
  zap: Zap,
  award: Award,
};

const colorMap = {
  trending: "text-green-500",
  users: "text-blue-500",
  rocket: "text-purple-500",
  target: "text-orange-500",
  zap: "text-yellow-500",
  award: "text-pink-500",
};

export default function MetricCard({
  icon,
  value,
  label,
  delay = 0,
}: MetricCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="group relative overflow-hidden rounded-[5px] border border-border bg-card p-5 transition-shadow hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 ${colorMap[icon]}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="index-num text-2xl font-semibold text-foreground">
            {value}
          </div>
          <div className="mt-1 text-sm text-muted-foreground leading-snug">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
