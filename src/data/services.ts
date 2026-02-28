export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy & Identity",
    description:
      "We architect brand ecosystems that transcend visual identity. From positioning strategy to sensory design, we create cohesive brand experiences that resonate at every touchpoint and leave lasting impressions.",
    features: [
      "Brand Audit & Research",
      "Strategic Positioning",
      "Visual Identity System",
      "Brand Guidelines & Toolkit",
      "Naming & Verbal Identity",
      "Brand Architecture",
    ],
  },
  {
    id: "web-design",
    number: "02",
    title: "Web Design & Development",
    description:
      "We build digital experiences that blur the line between art and engineering. Every pixel is intentional, every interaction is choreographed, and every millisecond of performance is optimized.",
    features: [
      "UI/UX Design",
      "Interactive Prototyping",
      "Frontend Development",
      "WebGL & 3D Experiences",
      "Performance Optimization",
      "CMS Integration",
    ],
  },
  {
    id: "motion-design",
    number: "03",
    title: "Motion & Animation",
    description:
      "We breathe life into static designs with purposeful motion. From micro-interactions to cinematic brand films, our animations guide users, tell stories, and create moments of delight.",
    features: [
      "Motion Systems",
      "Micro-interactions",
      "Brand Films & Reels",
      "Lottie Animations",
      "Scroll Experiences",
      "Generative Art",
    ],
  },
  {
    id: "digital-product",
    number: "04",
    title: "Digital Product Design",
    description:
      "We design products that people love to use. Through rigorous research, rapid prototyping, and obsessive iteration, we create interfaces that feel intuitive and look extraordinary.",
    features: [
      "User Research",
      "Information Architecture",
      "Design Systems",
      "Mobile App Design",
      "SaaS Interfaces",
      "Accessibility Audit",
    ],
  },
  {
    id: "creative-direction",
    number: "05",
    title: "Creative Direction",
    description:
      "We set the creative vision and ensure every output tells a unified story. From campaign concepts to art direction, we guide projects from ideation through execution with precision.",
    features: [
      "Campaign Strategy",
      "Art Direction",
      "Photography Direction",
      "Content Strategy",
      "Launch Planning",
      "Creative Workshops",
    ],
  },
];
