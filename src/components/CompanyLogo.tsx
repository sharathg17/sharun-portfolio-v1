"use client";

import { motion } from "framer-motion";

interface CompanyLogoProps {
  name: string;
  variant?: "light" | "dark";
  className?: string;
}

const brandColors: Record<string, { bg: string; text: string; border: string }> = {
  Aisepedia: { bg: "#1a1a2e", text: "#ffffff", border: "#4a4a6a" },
  Corestrat: { bg: "#2563eb", text: "#ffffff", border: "#1d4ed8" },
  EnCloudEn: { bg: "#0ea5e9", text: "#ffffff", border: "#0284c7" },
  Impelsys: { bg: "#059669", text: "#ffffff", border: "#047857" },
  "Head Held High": { bg: "#dc2626", text: "#ffffff", border: "#b91c1c" },
  "Ernst & Young": { bg: "#fbbf24", text: "#1f2937", border: "#f59e0b" },
};

export default function CompanyLogo({
  name,
  variant = "light",
  className = "",
}: CompanyLogoProps) {
  const colors = brandColors[name] || { bg: "#373A40", text: "#ffffff", border: "#000000" };
  
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border ${className}`}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        borderColor: colors.border,
      }}
    >
      <span className="font-heading font-semibold text-lg">
        {initials}
      </span>
    </motion.div>
  );
}
