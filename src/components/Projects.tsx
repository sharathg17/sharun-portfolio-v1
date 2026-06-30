"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import MetricCard from "@/components/MetricCard";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    id: "01",
    tag: "First Marketing Hire",
    title: "EnCloudEn",
    role: "Brand Principal → Head of Marketing · 2018–2022 · Acquired by Quantum, 2022",
    summary:
      "Joined as the company's first marketing hire with no function, no pipeline, no playbook. Built marketing from scratch across VDI, HCI, and Private Cloud lines and scaled it through to acquisition — then was retained to lead India marketing across three enterprise verticals post-deal.",
    metrics: [
      { icon: "trending" as const, value: "$500K", label: "Pipeline built from zero" },
      { icon: "users" as const, value: "30%", label: "Growth in sales lead funnel" },
      { icon: "award" as const, value: "Biocon", label: "Enterprise customer landed" },
    ],
    images: [
      { src: "/sharun-portfolio-v1/images/enclouden_1.jpeg", flipped: false },
      { src: "/sharun-portfolio-v1/images/enclouden_2.jpeg", flipped: true },
      { src: "/sharun-portfolio-v1/images/enclouden_3.jpeg", flipped: false },
    ],
  },
  {
    id: "02",
    tag: "Setup a Marketing Team",
    title: "Corestrat",
    role: "Head of Marketing & Sales · 2023–2024",
    summary:
      "Second startup built as the first dedicated marketing leader — strategy, budget, and multi-channel campaigns from the ground up. Narrowed the ICP and tightened messaging to land one of the largest accounts in the company's history, while making culture a deliberate part of the brand story.",
    metrics: [
      { icon: "target" as const, value: "35%", label: "Lead-to-opportunity conversion lift" },
      { icon: "rocket" as const, value: "Culture", label: "Promoted as core to the brand" },
      { icon: "award" as const, value: "Aditya Birla", label: "Largest customer secured" },
    ],
    images: [
      { src: "/sharun-portfolio-v1/images/corestrat_1.jpeg", flipped: false },
      { src: "/sharun-portfolio-v1/images/corestrat_2.jpeg", flipped: false },
      { src: "/sharun-portfolio-v1/images/corestrat_3.jpeg", flipped: false },
    ],
  },
  {
    id: "03",
    tag: "GTM System, Built In-House",
    title: "Aisepedia",
    role: "Director of Marketing · 2024–Present",
    summary:
      "Set up the GTM system end to end and used it to launch a design partner program that shaped the product itself, then ran a beta program that filled fast and converted into the company's marquee customer.",
    metrics: [
      { icon: "users" as const, value: "17+", label: "Design partners shaping the product" },
      { icon: "zap" as const, value: "250+", label: "Beta users in 2 months" },
      { icon: "award" as const, value: "Cisco", label: "Converted from the beta program" },
    ],
    images: [
      { src: "/sharun-portfolio-v1/images/aisepedia_1.jpeg", flipped: false },
      { src: "/sharun-portfolio-v1/images/aisepedia_2.jpeg", flipped: false },
      { src: "/sharun-portfolio-v1/images/aisepedia_3.jpeg", flipped: false },
    ],
  },
];

export default function Projects() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Helper function to find current project and image index
  const findImageContext = (imageSrc: string) => {
    for (const project of projects) {
      if (project.images) {
        const index = project.images.findIndex(img => img.src === imageSrc);
        if (index !== -1) {
          return { project, index };
        }
      }
    }
    return null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpandedImage(null);
        return;
      }

      if (!expandedImage) return;

      const context = findImageContext(expandedImage);
      if (!context) return;

      const { project, index } = context;
      
      if (e.key === "ArrowLeft" && index > 0) {
        setExpandedImage(project.images[index - 1].src);
      } else if (e.key === "ArrowRight" && index < project.images.length - 1) {
        setExpandedImage(project.images[index + 1].src);
      }
    };

    if (expandedImage) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedImage]);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16 sm:mb-24">
          <ScrollReveal>
            <SectionLabel index="01" className="mb-6">
              Featured Work
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.04]">
              Three startups,{" "}
              <span className="text-primary">scaled from zero.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground">
              The function didn&apos;t exist before I built it. Here&apos;s what
              each build actually moved.
            </p>
          </ScrollReveal>
        </div>

        <div className="border-t border-border">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease }}
              className="group grid lg:grid-cols-12 gap-y-6 lg:gap-x-10 py-12 border-b border-border"
            >
              <div className="lg:col-span-1">
                <span className="index-num text-2xl text-muted-foreground group-hover:text-primary transition-colors">
                  {project.id}
                </span>
              </div>

              <div className="lg:col-span-6">
                <span className="eyebrow text-primary">{project.tag}</span>
                <h3 className="font-heading font-medium text-3xl sm:text-4xl mt-3 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {project.role}
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-xl mb-5">
                  {project.summary}
                </p>
                {project.images && project.images.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: index * 0.05 + 0.1, ease }}
                    className="grid grid-cols-3 gap-2"
                  >
                    {project.images.map((image, i) => (
                      <motion.img
                        key={i}
                        src={image.src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setExpandedImage(image.src)}
                        style={{ transform: image.flipped ? "scaleX(-1)" : "none" }}
                        className="w-full h-24 object-cover rounded-lg border border-border cursor-pointer"
                      />
                    ))}
                  </motion.div>
                )}
              </div>

              <div className="lg:col-span-5 grid gap-4">
                {project.metrics.map((metric, i) => (
                  <MetricCard
                    key={i}
                    icon={metric.icon}
                    value={metric.value}
                    label={metric.label}
                    delay={index * 0.05 + i * 0.1}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedImage && (() => {
          const context = findImageContext(expandedImage);
          if (!context) return null;
          
          const { project, index } = context;
          const canGoLeft = index > 0;
          const canGoRight = index < project.images.length - 1;
          const currentImage = project.images[index];
          
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedImage(null);
                }}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
              
              {canGoLeft && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedImage(project.images[index - 1].src);
                  }}
                  className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </motion.button>
              )}
              
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={expandedImage}
                src={expandedImage}
                alt="Expanded view"
                style={{ transform: currentImage.flipped ? "scaleX(-1)" : "none" }}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {canGoRight && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedImage(project.images[index + 1].src);
                  }}
                  className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </motion.button>
              )}
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
