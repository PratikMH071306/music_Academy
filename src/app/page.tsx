import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-gradient-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
