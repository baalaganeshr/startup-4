import type { Metadata } from "next";
import {
  Orbitron,
  Audiowide,
  Rajdhani,
  Oxanium,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

import { LenisProvider } from "@/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";

/* ─── Brand Fonts ─── */

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const audiowide = Audiowide({
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
  weight: "400",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/* ─── Metadata ─── */

export const metadata: Metadata = {
  title: "NEXUS — Creative Agency | Design Beyond Boundaries",
  description:
    "NEXUS is a design-driven creative agency building bold brands, immersive digital experiences, and award-winning products for visionary startups.",
  keywords: [
    "creative agency",
    "design studio",
    "brand strategy",
    "web design",
    "digital experience",
    "motion design",
  ],
  openGraph: {
    title: "NEXUS — Creative Agency",
    description:
      "Design Beyond Boundaries. We craft bold brands and immersive digital experiences.",
    type: "website",
    locale: "en_US",
  },
};

/* ─── Root Layout ─── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${audiowide.variable} ${rajdhani.variable} ${oxanium.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
