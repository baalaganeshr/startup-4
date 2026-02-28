"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/work/${project.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-shadow/50">
          {/* Clip-path reveal */}
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{
              duration: 1.2,
              delay: 0.1 + index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Color Overlay */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-20"
              style={{ backgroundColor: project.color }}
            />
          </motion.div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-void/80 via-void/20 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div>
              <span className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.3em] text-plum">
                {project.category}
              </span>
              <p className="mt-2 max-w-xs font-[family-name:var(--font-body)] text-xs leading-relaxed text-mauve/80">
                {project.description.slice(0, 100)}...
              </p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-5 flex items-start justify-between">
          <div>
            <h3 className="font-[family-name:var(--font-sub)] text-lg font-bold uppercase tracking-wider text-blush transition-colors duration-300 group-hover:text-blush">
              {project.title}
            </h3>
            <div className="mt-2 flex items-center gap-3">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-wider text-mauve/60"
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

export function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5% 0px" });

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-6 py-32 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              className="mb-4 block font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.4em] text-plum"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Selected Work
            </motion.span>
            <TextReveal
              as="h2"
              className="font-[family-name:var(--font-heading)] fluid-heading font-bold uppercase text-blush"
              splitBy="word"
              staggerDelay={0.06}
            >
              Projects that speak
            </TextReveal>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-[family-name:var(--font-sub)] text-sm uppercase tracking-[0.2em] text-mauve transition-colors hover:text-blush"
            >
              View All Work
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
