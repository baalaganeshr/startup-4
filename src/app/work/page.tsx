"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
  size = "normal",
}: {
  project: (typeof projects)[0];
  index: number;
  size?: "large" | "normal";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      className={`group relative ${size === "large" ? "md:col-span-2 md:row-span-2" : ""}`}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div
          className={`relative overflow-hidden rounded-2xl bg-shadow/50 ${
            size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          {/* Image with clip-path reveal */}
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{
              duration: 1.2,
              delay: 0.1 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={size === "large" ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            />
            <div
              className="absolute inset-0 opacity-30 mix-blend-multiply"
              style={{ backgroundColor: project.color }}
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-void/90 via-void/30 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="flex justify-end">
              <span className="glass rounded-full px-4 py-1.5 font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.2em] text-blush/80">
                {project.category}
              </span>
            </div>
            <div>
              <p className="max-w-sm font-[family-name:var(--font-body)] text-sm leading-relaxed text-mauve/80">
                {project.description.slice(0, 120)}...
              </p>
              <div className="mt-4 flex items-center gap-2 font-[family-name:var(--font-sub)] text-xs uppercase tracking-[0.2em] text-blush">
                View Project
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Info below image */}
        <div className="mt-5 flex items-start justify-between">
          <div>
            <h3 className={`font-[family-name:var(--font-sub)] font-bold uppercase tracking-wider text-blush ${size === "large" ? "text-xl" : "text-lg"}`}>
              {project.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-wider text-mauve/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="font-[family-name:var(--font-accent)] text-xs text-mauve/40">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center px-6 pt-32 pb-20 lg:px-12">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(109, 60, 82, 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.span
            className="mb-6 inline-block font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.5em] text-plum"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Portfolio
          </motion.span>
          <TextReveal
            as="h1"
            className="font-[family-name:var(--font-display)] fluid-heading font-bold uppercase text-blush"
            splitBy="word"
            staggerDelay={0.06}
            delay={0.5}
          >
            Work that speaks for itself
          </TextReveal>
          <motion.p
            className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-mauve/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            A curated selection of projects where creativity meets execution.
            Each piece represents our obsession with craft and detail.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid — Bento Layout */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                size={i === 0 || i === 3 ? "large" : "normal"}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
