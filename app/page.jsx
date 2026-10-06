import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowWorkConnects from "@/components/HowWorkConnects";
import Results from "@/components/Results";
import GalleryClients from "@/components/GalleryClients";
import ServicesComparison from "@/components/ServicesComparison";
import ServicesFaq from "@/components/ServicesFaq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full bg-[#FAF6F0] text-[#15100C] selection:bg-[#D2392A] selection:text-white" style={{ overflowX: "clip" }}>
      <SmoothScroll />
      <Loader />
      <Navbar />
      <main>
        {/* 1. Preserved Signature Hero */}
        <Hero />

        {/* 2. Marquee Section with 21 scroll-driven motion gifs */}
        <MarqueeSection />

        {/* 3. About Section with 20+ years heritage, Cairo & Dubai presence */}
        <AboutSection />

        {/* 4. Eight Core Services Section */}
        <ServicesSection />

        {/* 5. Integrated Workflow: How the Work Connects from Strategy to Performance */}
        <HowWorkConnects />

        {/* 6. Studio Live Reels & Performance Results */}
        <Results />

        {/* 7. Trusted Enterprise Brands & Multinational Partners Ticker */}
        <GalleryClients />

        {/* 8. The Studio Advantage: Why Choose As Mama Said Over Legacy Agencies */}
        <ServicesComparison />

        {/* 9. Agency FAQ: Turnaround, Pricing, Ownership & Regional Hubs */}
        <ServicesFaq />

        {/* 10. Studio Contact & Direct Regional Inquiries */}
        <Contact />
      </main>
      {/* Studio Dithered Footer */}
      <Footer />
    </div>
  );
}
