"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    label: "Email",
    value: "hello@nexus.studio",
    href: "mailto:hello@nexus.studio",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);

  const fields = [
    { name: "name", label: "Your Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "company", label: "Company", type: "text" },
    { name: "budget", label: "Project Budget", type: "select" },
    { name: "message", label: "Tell us about your project", type: "textarea" },
  ];

  const budgetOptions = [
    { value: "", label: "Select a range" },
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k+", label: "$50,000+" },
  ];

  const inputClasses = cn(
    "w-full rounded-xl border bg-void/50 px-5 py-4",
    "font-[family-name:var(--font-body)] text-sm text-blush",
    "placeholder:text-mauve/30",
    "transition-all duration-300",
    "border-mauve/15 focus:border-plum/50 focus:outline-none focus:ring-1 focus:ring-plum/30",
    "hover:border-mauve/25"
  );

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="relative">
          <motion.label
            className={cn(
              "pointer-events-none absolute left-5 font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.2em] transition-all duration-300",
              focused === "name" || false
                ? "top-2 text-plum"
                : "top-4 text-mauve/40"
            )}
            animate={{
              top: focused === "name" ? 8 : 16,
              fontSize: focused === "name" ? "9px" : "10px",
            }}
          >
            Your Name
          </motion.label>
          <input
            type="text"
            name="name"
            className={cn(inputClasses, "pt-7")}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <motion.label
            className={cn(
              "pointer-events-none absolute left-5 font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.2em] transition-all duration-300",
              focused === "email"
                ? "top-2 text-plum"
                : "top-4 text-mauve/40"
            )}
            animate={{
              top: focused === "email" ? 8 : 16,
              fontSize: focused === "email" ? "9px" : "10px",
            }}
          >
            Email Address
          </motion.label>
          <input
            type="email"
            name="email"
            className={cn(inputClasses, "pt-7")}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Company */}
        <div className="relative">
          <motion.label
            className={cn(
              "pointer-events-none absolute left-5 font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.2em] transition-all duration-300",
              focused === "company"
                ? "top-2 text-plum"
                : "top-4 text-mauve/40"
            )}
            animate={{
              top: focused === "company" ? 8 : 16,
              fontSize: focused === "company" ? "9px" : "10px",
            }}
          >
            Company
          </motion.label>
          <input
            type="text"
            name="company"
            className={cn(inputClasses, "pt-7")}
            onFocus={() => setFocused("company")}
            onBlur={() => setFocused(null)}
          />
        </div>

        {/* Budget */}
        <div>
          <label className="mb-2 block font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.2em] text-mauve/40">
            Project Budget
          </label>
          <select name="budget" className={inputClasses}>
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-void text-blush">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <motion.label
          className={cn(
            "pointer-events-none absolute left-5 font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.2em] transition-all duration-300",
            focused === "message"
              ? "top-2 text-plum"
              : "top-4 text-mauve/40"
          )}
          animate={{
            top: focused === "message" ? 8 : 16,
            fontSize: focused === "message" ? "9px" : "10px",
          }}
        >
          Tell us about your project
        </motion.label>
        <textarea
          name="message"
          rows={5}
          className={cn(inputClasses, "resize-none pt-7")}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />
      </div>

      {/* Submit */}
      <div className="pt-4">
        <MagneticButton variant="primary" size="lg" className="w-full sm:w-auto">
          Send Message
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </MagneticButton>
      </div>
    </form>
  );
}

export default function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center px-6 pt-32 pb-12 lg:px-12">
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
            Get in Touch
          </motion.span>
          <TextReveal
            as="h1"
            className="font-[family-name:var(--font-display)] fluid-heading font-bold uppercase text-blush"
            splitBy="char"
            staggerDelay={0.03}
            delay={0.5}
          >
            Let&apos;s talk
          </TextReveal>
          <motion.p
            className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-mauve/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Have a project in mind? We&apos;d love to hear about it. Fill out
            the form below and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section ref={ref} className="px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Contact Info — Left */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-sub)] text-2xl font-bold uppercase tracking-wider text-blush">
              Reach Out
            </h2>
            <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-mauve/70">
              Whether you have a project brief ready or just want to explore
              possibilities, we&apos;re here to listen and collaborate.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-mauve/15 bg-shadow/30 text-plum transition-colors duration-300 group-hover:border-plum/30 group-hover:text-blush">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.2em] text-mauve/50">
                      {info.label}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-sm text-blush/80 transition-colors duration-300 group-hover:text-blush">
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <div className="mt-12">
              <span className="mb-4 block font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.3em] text-mauve/40">
                Follow Us
              </span>
              <div className="flex gap-3">
                {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-mauve/15 font-[family-name:var(--font-accent)] text-[9px] uppercase tracking-wider text-mauve/60 transition-all duration-300 hover:border-plum/30 hover:text-blush"
                  >
                    {social.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form — Right */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-8 md:p-10">
              <ContactForm />
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
