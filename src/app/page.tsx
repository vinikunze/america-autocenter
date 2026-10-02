import { HomeFaqSchema } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { FeatureBar } from "@/components/sections/FeatureBar";
import { Showcase } from "@/components/sections/Showcase";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Marquee } from "@/components/sections/Marquee";
import { Faq } from "@/components/sections/Faq";
import { Location } from "@/components/sections/Location";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <HomeFaqSchema />
      <Header />
      <main>
        <Hero />
        <FeatureBar />
        <Showcase />
        <Services />
        <Differentials />
        <Process />
        <Marquee />
        <Testimonials />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
