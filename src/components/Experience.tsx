"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const roles = [
    {
      id: "01",
      title: "Director of Marketing",
      org: "Aisepedia",
      when: "2024 – Present",
      achievements: [
        "Zero to 500+ community members and 20+ active influencer partnerships within the first year.",
        "Established Aisepedia as a product marketing environment via Product Marketing Alliance, PMM Camp, and AI for Product Marketing Summit.",
      ],
    },
    {
      id: "02",
      title: "Head of Marketing & Sales",
      org: "Corestrat",
      when: "2023 – 2024",
      achievements: [
        "Improved lead-to-opportunity conversion ~35% by narrowing ICP and tightening messaging.",
        "Built marketing strategy, budget, and multi-channel campaigns as the first dedicated marketing leader.",
      ],
    },
    {
      id: "03",
      title: "Marketing Manager, EU & USA",
      org: "Impelsys",
      when: "2022 – 2023",
      achievements: [
        "Ran demand generation across EU and USA markets.",
        "Built region-specific campaign programs establishing Impelsys's first structured marketing presence.",
      ],
    },
    {
      id: "04",
      title: "Brand Principal → Head of Marketing",
      org: "EnCloudEn",
      when: "2018 – 2022",
      achievements: [
        "Built the marketing function from scratch, grew sales lead funnel 30% as the first marketing hire.",
        "Retained post-acquisition to lead India marketing across three enterprise verticals.",
      ],
    },
    {
      id: "05",
      title: "Communications Manager",
      org: "Head Held High",
      when: "2016 – 2017",
      achievements: [
        "Designed communication strategies for the Make India Capable program, reaching partners, fellows, and rural youth nationwide.",
      ],
    },
    {
      id: "06",
      title: "Senior Tax Analyst",
      org: "Ernst & Young",
      when: "2011 – 2016",
      achievements: [
        "Prepared and reviewed Partnership Federal and state tax returns across India, Argentina, and the USA teams.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <ScrollReveal>
            <SectionLabel index="02" className="mb-6">
              Career Path
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.04]">
              Six roles,{" "}
              <span className="text-primary">one throughline.</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="border-t border-border">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.04, ease }}
              className="group grid md:grid-cols-12 gap-y-3 md:gap-x-10 py-8 border-b border-border"
            >
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="index-num text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {role.id}
                </span>
                <div>
                  <h3 className="font-heading font-medium text-xl sm:text-2xl">
                    {role.title}
                  </h3>
                  <p className="text-sm text-primary mt-1">{role.org}</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground md:pt-1">
                  {role.when}
                </p>
              </div>
              <div className="md:col-span-5">
                <ul className="space-y-2">
                  {role.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: index * 0.04 + i * 0.08, ease }}
                      className="text-sm text-muted-foreground relative pl-4"
                    >
                      <motion.span
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.3, delay: index * 0.04 + i * 0.08 + 0.1, ease }}
                        className="absolute left-0 top-2 w-1.5 h-px bg-primary origin-left"
                      />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
