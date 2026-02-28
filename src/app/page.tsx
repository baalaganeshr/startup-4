import { HeroSection } from "@/components/sections/hero";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { ServicesTeaserSection } from "@/components/sections/services-teaser";
import { FeaturedWorkSection } from "@/components/sections/featured-work";
import { StatsSection } from "@/components/sections/stats";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesTeaserSection />
      <FeaturedWorkSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
