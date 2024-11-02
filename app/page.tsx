import FeaturedProductsSection from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import TestimonialsSection from "@/components/home/Testamonial";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
    </div>
  );
}
