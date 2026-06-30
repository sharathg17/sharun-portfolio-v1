"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Approach() {
  const pillars = [
    {
      id: "01",
      title: "GTM Engine",
      description:
        "Apollo, HubSpot, LinkedIn, Teams & Google Analytics unified into one operating system.",
    },
    {
      id: "02",
      title: "GTM Playbook",
      description:
        "Frameworks for ICP, segmentation, positioning, messaging & execution.",
    },
    {
      id: "03",
      title: "Metrics-Driven",
      description:
        "Outcome-based reporting: pipeline contribution, conversion, ROI.",
    },
    {
      id: "04",
      title: "Culture-Led Brand",
      description:
        "Employee engagement that strengthens culture and the employer brand.",
    },
  ];

  return (
    <section id="approach" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <ScrollReveal>
            <SectionLabel index="03" className="mb-6">
              How I Work
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.04]">
              One system,{" "}
              <span className="text-primary">four interlocking parts.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground">
              Each pillar holds up the others — pull one out and the structure
              weakens. That&apos;s the honeycomb principle: individually simple,
              collectively load-bearing.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {pillars.slice(0, 2).map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border border-border rounded-[5px] h-full card-glow">
                  <CardContent className="p-8">
                    <div className="index-num text-sm text-primary mb-4">
                      {pillar.id}
                    </div>
                    <h3 className="text-xl font-medium font-heading mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <Card className="border border-border rounded-[5px] bg-primary text-primary-foreground max-w-md">
              <CardContent className="p-8 text-center">
                <div className="eyebrow mb-4 opacity-80">
                  The Core
                </div>
                <h3 className="text-2xl font-medium font-heading mb-3">
                  Revenue Outcomes
                </h3>
                <p className="opacity-90">
                  Every pillar ties back to pipeline, not just activity.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.slice(2).map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="border border-border rounded-[5px] h-full card-glow">
                  <CardContent className="p-8">
                    <div className="index-num text-sm text-primary mb-4">
                      {pillar.id}
                    </div>
                    <h3 className="text-xl font-medium font-heading mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
          >
            Like a honeycomb, no single cell carries the system alone — the
            strength is in how they connect.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
