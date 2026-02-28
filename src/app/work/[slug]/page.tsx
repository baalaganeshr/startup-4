"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { TextReveal } from "@/components/ui/text-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { projects } from "@/data/projects";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-blush">
            Project Not Found
          </h1>
          <p className="mt-4 text-mauve">The project you&apos;re looking for doesn&apos;t exist.</p>
          <div className="mt-8">
            <MagneticButton variant="outline" href="/work">
              Back to Work
            </MagneticButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 opacity-40 mix-blend-multiply"
            style={{ backgroundColor: project.color }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/50 to-transparent" />
      </section>

      {/* Project Info */}
      <section className="relative -mt-32 px-6 pb-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Meta */}
          <motion.div
            className="mb-6 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="glass rounded-full px-4 py-1.5 font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.3em] text-blush/80">
              {project.category}
            </span>
            <span className="font-[family-name:var(--font-accent)] text-xs text-mauve/50">
              {project.year}
            </span>
          </motion.div>

          {/* Title */}
          <TextReveal
            as="h1"
            className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase text-blush md:text-5xl lg:text-6xl"
            splitBy="word"
            staggerDelay={0.06}
            delay={0.4}
          >
            {project.title}
          </TextReveal>

          {/* Description */}
          <motion.p
            className="mt-8 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-mauve/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-mauve/15 bg-shadow/30 px-4 py-1.5 font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-wider text-mauve/70"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Content Sections */}
          <motion.div
            className="mt-20 space-y-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div>
              <h2 className="mb-4 font-[family-name:var(--font-sub)] text-xl font-bold uppercase tracking-wider text-blush">
                The Challenge
              </h2>
              <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-mauve/70">
                Every transformative project starts with a bold challenge. Our client needed a digital presence
                that matched their ambition — one that would stand out in a saturated market and create genuine
                emotional connections with their audience. The existing brand felt dated and disconnected from
                their innovative product offering.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-[family-name:var(--font-sub)] text-xl font-bold uppercase tracking-wider text-blush">
                The Approach
              </h2>
              <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-mauve/70">
                We began with an intensive discovery phase, immersing ourselves in the brand&apos;s ecosystem.
                Through collaborative workshops, competitive analysis, and user research, we developed a
                comprehensive creative strategy. Our design approach prioritized bold typography, rich
                interactive moments, and a cohesive visual language that felt both premium and approachable.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-[family-name:var(--font-sub)] text-xl font-bold uppercase tracking-wider text-blush">
                The Result
              </h2>
              <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-mauve/70">
                The final product exceeded expectations across every metric. User engagement increased by 340%,
                average session duration tripled, and the brand saw a 180% increase in qualified leads within
                the first quarter post-launch. The project went on to receive recognition from multiple
                international design awards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      {nextProject && (
        <section className="border-t border-mauve/10 px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 block font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.4em] text-plum">
              Next Project
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group inline-block"
            >
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-blush transition-colors duration-300 group-hover:text-plum md:text-5xl">
                {nextProject.title}
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2 font-[family-name:var(--font-sub)] text-sm uppercase tracking-[0.2em] text-mauve transition-colors duration-300 group-hover:text-blush">
                View Project
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
