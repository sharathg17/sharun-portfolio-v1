"use client";

import { useRef, useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

const MagneticButton = forwardRef<HTMLDivElement, MagneticButtonProps>(
  ({ children, className = "", href, onClick, ariaLabel }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const targetRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
      if (!targetRef.current) return;
      const rect = targetRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    const content = (
      <motion.div
        ref={ref || internalRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </motion.div>
    );

    if (href) {
      return <a href={href}>{content}</a>;
    }

    return content;
  }
);

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
