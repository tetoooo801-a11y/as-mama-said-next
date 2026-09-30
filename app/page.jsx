import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full bg-[#FAF6F0] text-[#15100C] selection:bg-[#D2392A] selection:text-white" style={{ overflowX: "clip" }}>
      <SmoothScroll />
      <Loader />
      <Navbar />
      <main>
        {/* Preserved Signature Hero */}
        <Hero />

        {/* 2. Marquee Section with 21 scroll-driven motion gifs */}
        <MarqueeSection />

        {/* 3. About Section with 4 floating 3D icons & scroll-driven character animated text */}
        <AboutSection />

        {/* 4. Services Section with white rounded card & 01-05 items */}
        <ServicesSection />

        {/* Studio Live Reels & Results */}
        <Results />

        {/* Studio Contact Inquiries */}
        <Contact />
      </main>
      {/* Studio Dithered Footer */}
      <Footer />
    </div>
  );
}
