export interface PricingTier {
  id: string;
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
}

export const pricing: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 4999, annual: 3999 },
    description: "Perfect for early-stage startups ready to make their mark.",
    features: [
      "Brand Identity Package",
      "Landing Page Design & Dev",
      "Social Media Kit (5 templates)",
      "1 Round of Revisions",
      "Brand Guidelines PDF",
      "2-Week Delivery",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: { monthly: 12999, annual: 9999 },
    description: "For ambitious brands ready to dominate their space.",
    features: [
      "Everything in Starter",
      "Full Website (Up to 8 pages)",
      "Motion Design Package",
      "Custom Illustrations",
      "SEO Optimization",
      "3 Rounds of Revisions",
      "CMS Integration",
      "4-Week Delivery",
    ],
    featured: true,
    cta: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: { monthly: 29999, annual: 24999 },
    description: "Full-scale creative partnership for industry leaders.",
    features: [
      "Everything in Growth",
      "3D / WebGL Experiences",
      "Design System & Component Library",
      "Product Design (Mobile + Web)",
      "Creative Direction",
      "Dedicated Team",
      "Unlimited Revisions",
      "Priority Support",
      "Ongoing Retainer Option",
    ],
    featured: false,
    cta: "Contact Us",
  },
];
