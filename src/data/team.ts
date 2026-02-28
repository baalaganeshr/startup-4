export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Creative Director",
    bio: "Former Design Lead at Pentagram. 12+ years shaping brands that define culture. Obsessed with the intersection of typography and code.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: "2",
    name: "Maya Chen",
    role: "Head of Engineering",
    bio: "Ex-Google, three.js contributor. Builds impossible interfaces and makes them run at 60fps. Believes every website should feel like magic.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: "3",
    name: "Jordan Blake",
    role: "Motion Director",
    bio: "Award-winning animator with a background in film. Transforms static designs into cinematic experiences. GSAP wizard and Lottie evangelist.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: "4",
    name: "Priya Sharma",
    role: "UX Strategist",
    bio: "Human-centered design advocate. Translates complex user research into elegant product decisions. Author of 'Designing for Emotion 2.0'.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    id: "5",
    name: "Kai Nakamura",
    role: "3D Artist",
    bio: "Blender & WebGL specialist. Creates immersive 3D worlds for the web. Previously at TeamLab, now pushing browser-based 3D to its limits.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    id: "6",
    name: "Sofia Moretti",
    role: "Brand Strategist",
    bio: "Storyteller at heart, strategist by trade. Helps startups find their voice and scale their message. Ex-IDEO, Stanford d.school alum.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
];

export const values = [
  {
    title: "Obsessive Craft",
    description:
      "Every pixel, every curve, every millisecond matters. We don't ship good enough—we ship extraordinary.",
  },
  {
    title: "Fearless Innovation",
    description:
      "We push technology and design beyond convention. If it's been done before, we find a way to do it differently.",
  },
  {
    title: "Human First",
    description:
      "Behind every screen is a person. We design for emotions, not just interactions. Beauty with purpose.",
  },
  {
    title: "Radical Transparency",
    description:
      "No black boxes. We bring clients into our process, share our thinking, and celebrate the messy middle.",
  },
];
