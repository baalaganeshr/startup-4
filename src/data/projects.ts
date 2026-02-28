export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  tags: string[];
  featured: boolean;
  color: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "nebula-brand",
    title: "Nebula Brand Identity",
    category: "Branding",
    description:
      "A complete brand transformation for a cutting-edge space tech startup, featuring holographic design language and quantum-inspired visual elements that push the boundaries of digital identity.",
    image: "https://images.unsplash.com/photo-1534996858221-380b92700493?w=800&q=80",
    year: "2026",
    tags: ["Branding", "Identity", "Motion Design"],
    featured: true,
    color: "#6D3C52",
  },
  {
    id: "2",
    slug: "aurora-platform",
    title: "Aurora Platform",
    category: "Web Design",
    description:
      "An immersive web experience for a next-gen creative platform. Dark-mode-first design with fluid animations, 3D micro-interactions, and a bespoke design system.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    year: "2026",
    tags: ["Web Design", "Development", "3D"],
    featured: true,
    color: "#4B2138",
  },
  {
    id: "3",
    slug: "cipher-app",
    title: "Cipher Mobile App",
    category: "UI/UX",
    description:
      "Redesigning the mobile experience for a privacy-first messaging app. Minimalist interfaces with sophisticated encryption visualization and haptic-driven interactions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    year: "2025",
    tags: ["Mobile", "UI/UX", "Prototyping"],
    featured: true,
    color: "#765D67",
  },
  {
    id: "4",
    slug: "vertex-campaign",
    title: "Vertex Campaign",
    category: "Motion",
    description:
      "A viral launch campaign for a DeFi protocol, combining generative art, real-time data visualization, and cinematic motion design across 12 digital touchpoints.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    year: "2025",
    tags: ["Motion", "Campaign", "Generative"],
    featured: false,
    color: "#2D222F",
  },
  {
    id: "5",
    slug: "prism-ecommerce",
    title: "Prism E-Commerce",
    category: "Web Design",
    description:
      "A luxury e-commerce experience with seamless 3D product visualization, AR try-on integration, and a performance-optimized storefront that converts.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    year: "2025",
    tags: ["E-Commerce", "3D", "AR"],
    featured: true,
    color: "#6D3C52",
  },
  {
    id: "6",
    slug: "echo-dashboard",
    title: "Echo Analytics",
    category: "UI/UX",
    description:
      "A real-time analytics dashboard for music streaming platforms, featuring waveform visualizations, audience heatmaps, and predictive trend analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    year: "2024",
    tags: ["Dashboard", "Data Viz", "UI/UX"],
    featured: false,
    color: "#4B2138",
  },
];
