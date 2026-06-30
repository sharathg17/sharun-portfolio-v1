"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["projects", "experience", "approach", "about"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Work", href: "#projects", num: "01", id: "projects" },
    { name: "Career", href: "#experience", num: "02", id: "experience" },
    { name: "Approach", href: "#approach", num: "03", id: "approach" },
    { name: "About", href: "#about", num: "04", id: "about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-px bg-primary origin-left"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="font-heading text-xl tracking-tight"
          >
            Sharun Shetty<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`group flex items-center gap-1.5 text-sm transition-colors ${
                  activeSection === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className={`eyebrow text-[0.6rem] transition-colors ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-primary/60 group-hover:text-primary"
                  }`}
                  animate={{
                    scale: activeSection === link.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {link.num}
                </motion.span>
                {link.name}
              </motion.a>
            ))}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            )}
            <a
              href="mailto:sharunshettys@gmail.com"
              className="rounded-full bg-primary text-white font-semibold text-sm px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              Let&apos;s talk
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full w-full justify-start"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-5 h-5 mr-2" />
                    Light mode
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 mr-2" />
                    Dark mode
                  </>
                )}
              </Button>
            )}
            <a
              href="mailto:sharunshettys@gmail.com"
              className="block text-center rounded-full bg-primary text-white font-semibold text-sm px-5 py-3 hover:opacity-90 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
