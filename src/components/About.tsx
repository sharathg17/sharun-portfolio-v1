"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const skills = [
    "GTM Systems",
    "Integrated Marketing",
    "Community Building",
    "Digital Ads",
    "Field Marketing",
    "Pipeline Strategy",
    "HubSpot",
    "Apollo",
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16 sm:mb-20">
          <ScrollReveal>
            <SectionLabel index="04" className="mb-6">
              Foundation
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.04]">
              Education &amp; <span className="text-primary">toolkit.</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-10 border-t border-border pt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-5"
          >
            <span className="eyebrow text-muted-foreground">Education</span>
            <h3 className="font-heading font-medium text-2xl sm:text-3xl mt-3 mb-2">
              Bachelor of Commerce
            </h3>
            <p className="text-primary mb-1">St. Aloysius College, Mangalore</p>
            <p className="text-sm text-muted-foreground">
              Leadership Award, 2010–11
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="md:col-span-7"
          >
            <span className="eyebrow text-muted-foreground">Core toolkit</span>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05, ease }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="btn-geo text-sm px-4 py-2 text-foreground/80 hover:text-foreground cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
